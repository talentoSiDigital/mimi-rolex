const payment = require('../middleware/cybersource')
const config = require('../config/cybersource.config');
const cybersourceRestApi = require('cybersource-rest-client');
const { request } = require('express');

const db = require("../models");
const Store = db.store;


exports.paymentCheck = async (req, res) => {

	if (!req.body) {

		res.status(500).send('Debes enviar el pago')
		return
	}

	const userId = parseInt(req.params.id)

	function randomStr() {
		let ans = crypto.randomUUID()
		let array = ans.split('-')
		return array[array.length - 1].toUpperCase();
	}

	let info = {
		"clientReferenceInformationCode": randomStr(),
		"orderInformationAmountTotal": req.body.total,
		"orderInformationAmountCurrency": 'USD',
		"orderInformationBillToFirstName": req.body.firstName,
		"orderInformationBillToLastName": req.body.lastName,
		"orderInformationBillToAddress": req.body.address,
		"orderInformationBillToCountry": req.body.country,
		"orderInformationBillToEmail": req.body.email,
		"orderInformationBillToPhoneNumber": req.body.phone,
		"paymentInformationCardNumber": req.body.cardNumber,
		"paymentInformationCardExpirationMonth": req.body.cardExpirationMonth,
		"paymentInformationCardExpirationYear": req.body.cardExpirationYear,
		"orderInformationBillToLocality": req.body.region

	}
	if (req.body.country == 'US' || req.body.country == 'CA') {
		info.orderInformationBillToAdministrativeArea = req.body.region
		info.orderInformationBillToPostalCode = req.body.zip
		info.orderInformationBillToDistrict = req.body.region
		info.orderInformationBillToBuildingNumber = req.body.buildingNumber
	}


	try {
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CreatePaymentRequest();

		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		requestObj.clientReferenceInformation = clientReferenceInformation;

		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount = info.orderInformationAmountTotal;
		orderInformationAmountDetails.currency = info.orderInformationAmountCurrency;
		orderInformation.amountDetails = orderInformationAmountDetails;

		var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
		orderInformationBillTo.firstName = info.orderInformationBillToFirstName;
		orderInformationBillTo.lastName = info.orderInformationBillToLastName;
		orderInformationBillTo.address1 = info.orderInformationBillToAddress;
		orderInformationBillTo.country = info.orderInformationBillToCountry;
		orderInformationBillTo.email = info.orderInformationBillToEmail;
		orderInformationBillTo.phoneNumber = info.orderInformationBillToPhoneNumber;
		orderInformationBillTo.locality = info.orderInformationBillToLocality;
		if (req.body.country == 'US' || req.body.country == 'CA') {
			orderInformationBillTo.administrativeArea = info.orderInformationBillToAdministrativeArea;
			orderInformationBillTo.postalCode = info.orderInformationBillToPostalCode;
			orderInformationBillTo.district = info.orderInformationBillToDistrict;
			orderInformationBillTo.buildingNumber = info.orderInformationBillToBuildingNumber;
		}
		orderInformation.billTo = orderInformationBillTo;
		requestObj.orderInformation = orderInformation;

		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
		var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
		paymentInformationCard.number = info.paymentInformationCardNumber;
		paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		paymentInformation.card = paymentInformationCard;

		requestObj.paymentInformation = paymentInformation;

		var tokenInformation = new cybersourceRestApi.Ptsv2paymentsTokenInformation();
		tokenInformation.transientTokenJwt = process.env.SECRET_KEY;
		requestObj.tokenInformation = tokenInformation;
		var instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);

		instance.createPayment(requestObj, async function (error, data, response) {
			if (error) {
				console.log('\nError : ' + JSON.stringify(error));
			}
			else if (data) {
				console.log('\nData : ' + JSON.stringify(data));
			}

			console.log('\nResponse : ' + JSON.stringify(response));
			console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
			console.log('\nResponse text : ' + JSON.stringify(response['text']));
			var status = response['status'];
			if (status == '201') {
				console.log('+++++++++++++++++++++++');


				const cartId = await Store.Cart.findAll({
					where: {
						ownerId: userId,
					},
					attributes: ['id']
				})

				console.log('1+++++++++++++++++++++++');

				Store.CartProduct.findAll({
					where: {
						cartId: cartId[0].dataValues.id
					}
				})
					.then(async (d) => {
						console.log('2++++++++++++++++++++++');

						const products = d


						const createBill = await Store.Bill.create({
							codigo: info.clientReferenceInformationCode,
							direccion: info.orderInformationBillToAddress,
							pais: info.orderInformationBillToCountry,
							ciudad: info.orderInformationBillToLocality,
							total: `${info.orderInformationAmountTotal}`,
							ownerId: userId
						})
						const data = []
						for (let item = 0; item < products.length; item++) {
							data.push({})
							for (const key in products[item].dataValues) {

								if (key !== "cartId") {
									data[data.length - 1][key] = products[item].dataValues[key]
								} else {
									data[data.length - 1]["billId"] = createBill.dataValues.id
								}
							}
						}

						return data
					})

					.then((d) => {

						console.log('6++++++++++++++++++++++');
						Store.BillProduct.bulkCreate(d).then((result) => {
							console.log(result, 'done');
						})
					})
					.then((d) => {

						console.log('7++++++++++++++++++++++');
						Store.CartProduct.destroy({
						where: {
							cartId: cartId[0].dataValues.id
						}
					})})
					.then(() => res.redirect("/api/paymail/" + info.clientReferenceInformationCode))
					.catch((error) => {

						console.log(error);
						res.sendStatus(500).send(error)
					})



			}
			else{
				res.sendStatus(400).send('DECLINED')
			}


			if (response['text'] == 'DECLINED') {
				return
			}


		});


	}
	catch (error) {
		console.log('\nException on calling the API : ' + error);
	}

}


