const payment = require('../middleware/cybersource')
const config = require('../config/cybersource.config');
const cybersourceRestApi = require('cybersource-rest-client');
const { request } = require('express');

const db = require("../models");
const Store = db.store;



exports.paymentAuthenticationStep1 = async (req, res) => {
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	// user info setup
	const userId = parseInt(req.params.id)


	let info = {
		"clientReferenceInformationCode": req.body.code,

		"paymentInformationCardNumber": req.body.cardNumber,
		"paymentInformationCardExpirationMonth": req.body.cardExpirationMonth,
		"paymentInformationCardExpirationYear": req.body.cardExpirationYear,

	}

	try {
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.PayerAuthSetupRequest();

		var clientReferenceInformation = new cybersourceRestApi.Riskv1decisionsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		var clientReferenceInformationPartner = new cybersourceRestApi.Riskv1decisionsClientReferenceInformationPartner();
		clientReferenceInformationPartner.developerId = '7891234';
		clientReferenceInformation.partner = clientReferenceInformationPartner;

		requestObj.clientReferenceInformation = clientReferenceInformation;

		var paymentInformation = new cybersourceRestApi.Riskv1authenticationsetupsPaymentInformation();
		var paymentInformationCard = new cybersourceRestApi.Riskv1authenticationsetupsPaymentInformationCard();
		paymentInformationCard.number = info.paymentInformationCardNumber;
		paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		paymentInformation.card = paymentInformationCard;

		requestObj.paymentInformation = paymentInformation;


		var instance = new cybersourceRestApi.PayerAuthenticationApi(configObject, apiClient);

		instance.payerAuthSetup(requestObj, function (error, data, response) {
			if (error) {
			}
			else if (data) {
			}

			var responseData = JSON.parse(response['text'])
			res.send(responseData)
		});
	}
	catch (error) {
	}

}

exports.paymentAuthenticationStep2 = (req, res) => {
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	// user info setup
	const userId = parseInt(req.params.id)


	let info = {
		"clientId": userId,
		"clientReferenceInformationCode": req.body.code,
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
		"orderInformationBillToLocality": req.body.region,
		"documentId": req.body.documentId,
		"userId": userId,
		"fingerprintSessionId": req.body.deviceFingerPrintID,
		"ipAddress": req.body.ip,
		"authenticationTransactionId": req.body.authenticationTransactionId,
		"referenceId": req.body.referenceId,
		"returnUrl": req.body.returnUrl,
		"clientId": req.body.clientId

	}
	console.log(info);

	if (req.body.country == 'US' || req.body.country == 'CA') {
		info.orderInformationBillToAdministrativeArea = req.body.region
		info.orderInformationBillToPostalCode = req.body.zip
		info.orderInformationBillToDistrict = req.body.region
		info.orderInformationBillToBuildingNumber = req.body.buildingNumber
	}

	try {
		// Create Config Object
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CheckPayerAuthEnrollmentRequest();

		var clientReferenceInformation = new cybersourceRestApi.Riskv1decisionsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		var clientReferenceInformationPartner = new cybersourceRestApi.Riskv1decisionsClientReferenceInformationPartner();
		clientReferenceInformationPartner.developerId = '7891234';
		clientReferenceInformation.partner = clientReferenceInformationPartner;

		requestObj.clientReferenceInformation = clientReferenceInformation;


		// order amount setup
		var orderInformation = new cybersourceRestApi.Riskv1authenticationsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Riskv1authenticationsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount = info.orderInformationAmountTotal;
		orderInformationAmountDetails.currency = info.orderInformationAmountCurrency;
		orderInformation.amountDetails = orderInformationAmountDetails;

		// Billing personal info setup
		var orderInformationBillTo = new cybersourceRestApi.Riskv1authenticationsOrderInformationBillTo();
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

		// Card information setup
		var paymentInformation = new cybersourceRestApi.Riskv1decisionsPaymentInformation();
		var paymentInformationCard = new cybersourceRestApi.Riskv1decisionsPaymentInformationCard();

		paymentInformationCard.number = info.paymentInformationCardNumber;
		paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		paymentInformation.card = paymentInformationCard;

		requestObj.paymentInformation = paymentInformation;



		var buyerInformation = new cybersourceRestApi.Riskv1authenticationsBuyerInformation();
		buyerInformation.mobilePhone = parseInt(info.orderInformationBillToPhoneNumber);
		requestObj.buyerInformation = buyerInformation;


		var consumerAuthenticationInformation = new cybersourceRestApi.Riskv1decisionsConsumerAuthenticationInformation();
		consumerAuthenticationInformation.transactionMode = 'S';
		consumerAuthenticationInformation.referenceId = info.referenceId;
		consumerAuthenticationInformation.returnUrl = process.env.RETURN_URL + '/validation-step/';

		requestObj.consumerAuthenticationInformation = consumerAuthenticationInformation;


		var instance = new cybersourceRestApi.PayerAuthenticationApi(configObject, apiClient);

		instance.checkPayerAuthEnrollment(requestObj, function (error, data, response) {
			var responseData = JSON.parse(response['text'])
			res.send(responseData)

		});
	}
	catch (error) {
	}

}

exports.paymentAuthenticationStep4 = (req, res) => {
	res.render("validation", {
		data: req.body.TransactionId
	})
}

exports.validationReturn = (req, res) => {
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	// user info setup
	const userId = parseInt(req.params.id)


	let info = {
		"clientId": userId,
		"clientReferenceInformationCode": req.body.code,
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
		"orderInformationBillToLocality": req.body.region,
		"documentId": req.body.documentId,
		"userId": userId,
		"fingerprintSessionId": req.body.deviceFingerPrintID,
		"ipAddress": req.body.ip,
		"authenticationTransactionId": req.body.authenticationTransactionId,
		"referenceId": req.body.referenceId,
		"returnUrl": req.body.returnUrl,
		"clientId": req.body.clientId,
		"authenticationTransactionId": req.body.authenticationTransactionId,

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
		var requestObj = new cybersourceRestApi.ValidateRequest();

		var clientReferenceInformation = new cybersourceRestApi.Riskv1decisionsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		var clientReferenceInformationPartner = new cybersourceRestApi.Riskv1decisionsClientReferenceInformationPartner();
		clientReferenceInformationPartner.developerId = '7891234';
		clientReferenceInformation.partner = clientReferenceInformationPartner;

		requestObj.clientReferenceInformation = clientReferenceInformation;

		var orderInformation = new cybersourceRestApi.Riskv1authenticationresultsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Riskv1authenticationresultsOrderInformationAmountDetails();
		orderInformationAmountDetails.currency = 'USD';
		orderInformationAmountDetails.totalAmount = info.orderInformationAmountTotal;
		orderInformation.amountDetails = orderInformationAmountDetails;

		requestObj.orderInformation = orderInformation;

		var paymentInformation = new cybersourceRestApi.Riskv1authenticationresultsPaymentInformation();
		var paymentInformationCard = new cybersourceRestApi.Riskv1authenticationresultsPaymentInformationCard();
		paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		paymentInformationCard.number = info.paymentInformationCardNumber;
		paymentInformation.card = paymentInformationCard;

		requestObj.paymentInformation = paymentInformation;

		var consumerAuthenticationInformation = new cybersourceRestApi.Riskv1authenticationresultsConsumerAuthenticationInformation();
		consumerAuthenticationInformation.authenticationTransactionId = info.authenticationTransactionId;
		requestObj.consumerAuthenticationInformation = consumerAuthenticationInformation;


		var instance = new cybersourceRestApi.PayerAuthenticationApi(configObject, apiClient);

		instance.validateAuthenticationResults(requestObj, function (error, data, response) {


			var responseData = JSON.parse(response['text'])

			res.send(responseData)
		});
	}
	catch (error) {
	}



}

exports.tokenGeneration = async (req, res) => {
	// Check if request has body
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	console.log("Comienzo de la ejecución")

	var responseData = ""
	let info = {
		"clientReferenceInformationCode": req.body.code,
		"orderInformationAmountTotal": req.body.total,
		"orderInformationAmountCurrency": 'USD',
		"orderInformationBillToFirstName": req.body.firstName,
		"orderInformationBillToLastName": req.body.lastName,
		"orderInformationBillToAddress": req.body.address,
		"orderInformationBillToCountry": req.body.country,
		"referenceCode": req.body.referenceCode,
		"orderInformationBillToEmail": req.body.email,
		"orderInformationBillToPhoneNumber": req.body.phone,
		"paymentInformationCardNumber": req.body.cardNumber,
		"paymentInformationCardExpirationMonth": req.body.cardExpirationMonth,
		"paymentInformationCardExpirationYear": req.body.cardExpirationYear,
		"orderInformationBillToLocality": req.body.region,
		"transactionToken": req.body.transactionToken
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
		var requestObj = new cybersourceRestApi.PostCustomerRequest();


		var buyerInformation = new cybersourceRestApi.Tmsv2customersBuyerInformation();
		buyerInformation.merchantCustomerID = 'TestCustomer';
		buyerInformation.email = 'test@cybs.com';
		requestObj.buyerInformation = buyerInformation;

		var instance = new cybersourceRestApi.CustomerApi(configObject, apiClient);
		var opts = [];

		instance.postCustomer(requestObj, opts, function (error, data, response) {

			if (error) {
				console.log('\nError : ' + JSON.stringify(error));
			}
			else if (data) {
				console.log('\nData : ' + JSON.stringify(data));
			}

			console.log('\nResponse : ' + JSON.stringify(response));
			console.log('\nResponse Code of Retrieve a Customer : ' + JSON.stringify(response['status']));
			var customerToken = JSON.parse(response['text'])
			var customerTokenId = customerToken.id

			console.log('=================================1');

			requestObj = new cybersourceRestApi.PostCustomerShippingAddressRequest();

			// Billing personal info setup
			var shipTo = new cybersourceRestApi.Tmsv2customersEmbeddedDefaultShippingAddressShipTo();
			shipTo.customerId = info.customerTokenId;
			shipTo.firstName = info.orderInformationBillToFirstName;
			shipTo.lastName = info.orderInformationBillToLastName;
			shipTo.address1 = info.orderInformationBillToAddress;
			shipTo.country = info.orderInformationBillToCountry;
			shipTo.email = info.orderInformationBillToEmail;
			shipTo.phoneNumber = info.orderInformationBillToPhoneNumber;
			shipTo.locality = info.orderInformationBillToLocality;
			if (req.body.country == 'US' || req.body.country == 'CA') {
				shipTo.administrativeArea = info.orderInformationBillToAdministrativeArea;
				shipTo.postalCode = info.orderInformationBillToPostalCode;
				shipTo.district = info.orderInformationBillToDistrict;
				shipTo.buildingNumber = info.orderInformationBillToBuildingNumber;
			}
			requestObj.shipTo = shipTo;



			instance = new cybersourceRestApi.CustomerShippingAddressApi(configObject, apiClient);

			instance.postCustomerShippingAddress(customerTokenId, requestObj, opts, function (error, data, response) {
				if (error) {
					console.log('\nError : ' + JSON.stringify(error));
				}
				else if (data) {
					console.log('\nData : ' + JSON.stringify(data));
				}
				const customerShippingAddress = JSON.parse(response['text'])
				const customerShippingAddressId = customerShippingAddress.id

				console.log("=======================2");

				requestObj = new cybersourceRestApi.PostInstrumentIdentifierRequest();

				var card = new cybersourceRestApi.TmsEmbeddedInstrumentIdentifierCard();
				card.number = info.paymentInformationCardNumber;
				requestObj.card = card;

				instance = new cybersourceRestApi.InstrumentIdentifierApi(configObject, apiClient);

				instance.postInstrumentIdentifier(requestObj, opts, function (error, data, response) {
					if (error) {
						console.log('\nError : ' + JSON.stringify(error));
					}

					console.log('\nData : ' + JSON.stringify(data));
					const instrumentIdentifierResponse = JSON.parse(response['text']);
					const instrumentIdentifierId = instrumentIdentifierResponse.id
					console.log("=======================3");


					requestObj = new cybersourceRestApi.PostCustomerPaymentInstrumentRequest();

					var card = new cybersourceRestApi.Tmsv2customersEmbeddedDefaultPaymentInstrumentCard();
					card.expirationMonth = '12';
					card.expirationYear = '2031';
					card.type = info.paymentInformationCardNumber.charAt(0) === '4' ? '001' : '002'

					requestObj.card = card;

					var billTo = new cybersourceRestApi.Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo();
					billTo.customerId = info.customerTokenId;
					billTo.firstName = info.orderInformationBillToFirstName;
					billTo.lastName = info.orderInformationBillToLastName;
					billTo.address1 = info.orderInformationBillToAddress;
					billTo.country = info.orderInformationBillToCountry;
					billTo.email = info.orderInformationBillToEmail;
					billTo.phoneNumber = info.orderInformationBillToPhoneNumber;
					billTo.locality = info.orderInformationBillToLocality;
					if (req.body.country == 'US' || req.body.country == 'CA') {
						billTo.administrativeArea = info.orderInformationBillToAdministrativeArea;
						billTo.postalCode = info.orderInformationBillToPostalCode;
						billTo.district = info.orderInformationBillToDistrict;
						billTo.buildingNumber = info.orderInformationBillToBuildingNumber;
					}

					var instrumentIdentifier = new cybersourceRestApi.Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier();
					instrumentIdentifier.id = instrumentIdentifierId;
					requestObj.instrumentIdentifier = instrumentIdentifier;


					instance = new cybersourceRestApi.CustomerPaymentInstrumentApi(configObject, apiClient);

					instance.postCustomerPaymentInstrument(customerTokenId, requestObj, opts, function (error, data, response) {
						if (error) {
							console.log('\nError : ' + JSON.stringify(error));
						}

						const paymentInstrument = JSON.parse(response['text']);
						const paymentInstrumentId = paymentInstrument.id

						console.log("=======================4");

						res.send({
							"customerTokenId": customerTokenId,
							"customerShippingAddressId": customerShippingAddressId,
							"instrumentIdentifierId": instrumentIdentifierId,
							"paymentInstrumentId": paymentInstrumentId
						});
					});






				});

			});





		});




	}
	catch (error) {
		res.send("Ocurrio un error: " + error.message)
	}

}

exports.paymentCheck = async (req, res) => {
	// Check if request has body
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	// user info setup
	const userId = parseInt(req.params.id)

	let info = {
		"clientReferenceInformationCode": req.body.code,
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
		"orderInformationBillToLocality": req.body.region,
		"documentId": req.body.documentId,
		"transactionId": req.body.transactionId,
		"referenceId": req.body.referenceId,
		"signedPares": req.body.signedPares,
		"cavv": req.body.cavv,
		"xid": req.body.xid,
		"ecommerceIndicator": req.body.ecommerceIndicator,
		"eciRaw": req.body.eciRaw,
		"ucafCollectionIndicator": req.body.ucafCollectionIndicator,
		"ucafAuthenticationData": req.body.ucafAuthenticationData,
		"veresEnrolled": req.body.veresEnrolled,
		"directoryServerTransactionId": req.body.directoryServerTransactionId,
		"transactionToken": req.body.transactionToken,
		"instrument": req.body.instrument,
		"referenceCode": req.body.referenceCode,
	}



	if (req.body.country == 'US' || req.body.country == 'CA') {
		info.orderInformationBillToAdministrativeArea = req.body.region
		info.orderInformationBillToPostalCode = req.body.zip
		info.orderInformationBillToDistrict = req.body.region
		info.orderInformationBillToBuildingNumber = req.body.buildingNumber
	}


	console.log(info);
	try {
		// Create Config Object
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CreatePaymentRequest();


		// Code reference 
		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		requestObj.clientReferenceInformation = clientReferenceInformation;


		var processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();

		processingInformation.commerceIndicator = info.ecommerceIndicator

		requestObj.processingInformation = processingInformation;


		// Card information setup
		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();

		var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationTokenizedCard();

		paymentInformationCard.number = info.paymentInformationCardNumber;
		paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		paymentInformation.card = paymentInformationCard;

		requestObj.paymentInformation = paymentInformation;




		// order amount setup
		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount = info.orderInformationAmountTotal;
		orderInformationAmountDetails.currency = info.orderInformationAmountCurrency;
		orderInformation.amountDetails = orderInformationAmountDetails;




		// Billing personal info setup
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



		// Device fingerprint information, required by cybersource
		var deviceInformation = new cybersourceRestApi.Riskv1decisionsDeviceInformation();
		deviceInformation.fingerprintSessionId = req.body.deviceFingerPrintID
		deviceInformation.ipAddress = req.body.ip;
		requestObj.deviceInformation = deviceInformation;


		// Merchant Defined Data (MDD) information, required by cybersource

		var merchantDefinedInformation = new Array();
		var merchantDefinedInformation1 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation1.key = '1';
		merchantDefinedInformation1.value = 'bc_5808459559';
		merchantDefinedInformation.push(merchantDefinedInformation1);

		var merchantDefinedInformation2 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation2.key = '2';
		merchantDefinedInformation2.value = 'WEB';
		merchantDefinedInformation.push(merchantDefinedInformation2);

		var merchantDefinedInformation3 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation3.key = '3';
		merchantDefinedInformation3.value = info.clientReferenceInformationCode;
		merchantDefinedInformation.push(merchantDefinedInformation3);


		var merchantDefinedInformation4 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation4.key = '4';
		merchantDefinedInformation4.value = 'P-3DS Joyeria';
		merchantDefinedInformation.push(merchantDefinedInformation4);

		var merchantDefinedInformation5 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation5.key = '5';
		merchantDefinedInformation5.value = 'INVERSIONES MIMI, C.A.';
		merchantDefinedInformation.push(merchantDefinedInformation5);


		var merchantDefinedInformation6 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation6.key = '6';
		merchantDefinedInformation6.value = '5094 Precious Stones/Metals/Jewe';
		merchantDefinedInformation.push(merchantDefinedInformation6);


		var merchantDefinedInformation7 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation7.key = '7';
		merchantDefinedInformation7.value = req.body.documentId;
		merchantDefinedInformation.push(merchantDefinedInformation7);


		var merchantDefinedInformation8 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation8.key = '8';
		merchantDefinedInformation8.value = 'NO';
		merchantDefinedInformation.push(merchantDefinedInformation8);

		requestObj.merchantDefinedInformation = merchantDefinedInformation;

		var consumerAuthenticationInformation = new cybersourceRestApi.Ptsv2paymentsConsumerAuthenticationInformation();
		consumerAuthenticationInformation.transactionId = info.transactionId;
		consumerAuthenticationInformation.signedPares = info.signedPares;
		consumerAuthenticationInformation.cavv = info.cavv
		consumerAuthenticationInformation.xid = info.xid
		consumerAuthenticationInformation.ecommerceIndicator = info.ecommerceIndicator
		consumerAuthenticationInformation.eciRaw = info.eciRaw
		consumerAuthenticationInformation.transactionToken = info.transactionToken
		consumerAuthenticationInformation.ucafCollectionIndicator = info.ucafCollectionIndicator
		consumerAuthenticationInformation.ucafAuthenticationData = info.ucafAuthenticationData
		consumerAuthenticationInformation.veresEnrolled = info.veresEnrolled
		consumerAuthenticationInformation.directoryServerTransactionId = info.directoryServerTransactionId
		requestObj.consumerAuthenticationInformation = consumerAuthenticationInformation

		var tokenInformation = new cybersourceRestApi.Ptsv2paymentsTokenInformation();
		tokenInformation.transientTokenJwt = process.env.SECRET_KEY;
		requestObj.tokenInformation = tokenInformation;
		var instance2 = new cybersourceRestApi.PaymentsApi(configObject, apiClient);



		instance2.createPayment(requestObj, async function (error, data, response) {
			payStatus = JSON.parse(response['text'])
			res.send(payStatus)

			// if (payStatus.status == 'AUTHORIZED') {


			// 	const cartId = await Store.Cart.findAll({
			// 		where: {
			// 			ownerId: userId,
			// 		},
			// 		attributes: ['id']
			// 	})


			// 	Store.CartProduct.findAll({
			// 		where: {
			// 			cartId: cartId[0].dataValues.id
			// 		}
			// 	})
			// 		.then(async (d) => {

			// 			const products = d


			// 			const createBill = await Store.Bill.create({
			// 				codigo: info.clientReferenceInformationCode,
			// 				direccion: info.orderInformationBillToAddress,
			// 				pais: info.orderInformationBillToCountry,
			// 				ciudad: info.orderInformationBillToLocality,
			// 				total: `${info.orderInformationAmountTotal}`,
			// 				ownerId: userId
			// 			})
			// 			const data = []
			// 			for (let item = 0; item < products.length; item++) {
			// 				data.push({})
			// 				for (const key in products[item].dataValues) {

			// 					if (key !== "cartId") {
			// 						data[data.length - 1][key] = products[item].dataValues[key]
			// 					} else {
			// 						data[data.length - 1]["billId"] = createBill.dataValues.id
			// 					}
			// 				}
			// 			}

			// 			return data
			// 		})

			// 		.then((d) => {

			// 			Store.BillProduct.bulkCreate(d).then((result) => {
			// 			})
			// 		})
			// 		.then((d) => {

			// 			Store.CartProduct.destroy({
			// 				where: {
			// 					cartId: cartId[0].dataValues.id
			// 				}
			// 			})
			// 		})
			// 		.then(() => res.redirect("/api/paymail/" + info.clientReferenceInformationCode))
			// 		.catch((error) => {

			// 			res.sendStatus(500).send(error)
			// 		})



			// }
			// else {
			// 	res.sendStatus(400).send(payStatus)
			// }


		})









	}
	catch (error) {
	}

}

exports.payWithToken = async (req, res) => {
	// Check if request has body
	if (!req.body) {
		res.status(500).send('Debes enviar el pago')
		return
	}
	// user info setup
	const userId = parseInt(req.params.id)

	let info = {
		"clientReferenceInformationCode": req.body.code,
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
		"orderInformationBillToLocality": req.body.region,
		"documentId": req.body.documentId,
		"customerTokenId": req.body.customerId,
		"customerShippingAddressId": req.body.customerShippingAddress,
		"instrumentIdentifierId": req.body.instrumentIdentifierId,
		"paymentInstrumentId": req.body.paymentInstrumentId,
		"transactionId": req.body.transactionId,
		"referenceId": req.body.referenceId,
		"signedPares": req.body.signedPares,
		"cavv": req.body.cavv,
		"xid": req.body.xid,
		"ecommerceIndicator": req.body.ecommerceIndicator,
		"eciRaw": req.body.eciRaw,
		"ucafCollectionIndicator": req.body.ucafCollectionIndicator,
		"ucafAuthenticationData": req.body.ucafAuthenticationData,
		"veresEnrolled": req.body.veresEnrolled,
		"directoryServerTransactionId": req.body.directoryServerTransactionId,
		"transactionToken": req.body.transactionToken,
		"instrument": req.body.instrument,
		"referenceCode": req.body.referenceCode,
	}



	if (req.body.country == 'US' || req.body.country == 'CA') {
		info.orderInformationBillToAdministrativeArea = req.body.region
		info.orderInformationBillToPostalCode = req.body.zip
		info.orderInformationBillToDistrict = req.body.region
		info.orderInformationBillToBuildingNumber = req.body.buildingNumber
	}


	console.log(info);
	try {
		// Create Config Object
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CreatePaymentRequest();

		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = 'TC50171_3';
		requestObj.clientReferenceInformation = clientReferenceInformation;


		// Code reference 
		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = info.clientReferenceInformationCode;
		requestObj.clientReferenceInformation = clientReferenceInformation;


		var processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();

		processingInformation.commerceIndicator = info.ecommerceIndicator

		requestObj.processingInformation = processingInformation;


		// Card information setup
		
		// var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();

		// var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationTokenizedCard();

		// paymentInformationCard.number = info.paymentInformationCardNumber;
		// paymentInformationCard.expirationMonth = info.paymentInformationCardExpirationMonth;
		// paymentInformationCard.expirationYear = info.paymentInformationCardExpirationYear;
		// paymentInformation.card = paymentInformationCard;

		// requestObj.paymentInformation = paymentInformation;

		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
		var paymentInformationCustomer = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCustomer();
		paymentInformationCustomer.id =info.customerTokenId;
		paymentInformation.customer = paymentInformationCustomer;

		var paymentInformationPaymentInstrument = new cybersourceRestApi.Ptsv2paymentsPaymentInformationPaymentInstrument();
		paymentInformationPaymentInstrument.id = info.paymentInstrumentId;
		paymentInformation.paymentInstrument = paymentInformationPaymentInstrument;

		var paymentInformationShippingAddress = new cybersourceRestApi.Ptsv2paymentsPaymentInformationShippingAddress();
		paymentInformationShippingAddress.id = info.customerShippingAddressId;
		paymentInformation.shippingAddress = paymentInformationShippingAddress;

		requestObj.paymentInformation = paymentInformation;





		// order amount setup
		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount = info.orderInformationAmountTotal;
		orderInformationAmountDetails.currency = info.orderInformationAmountCurrency;
		orderInformation.amountDetails = orderInformationAmountDetails;




		// Billing personal info setup
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



		// Device fingerprint information, required by cybersource
		var deviceInformation = new cybersourceRestApi.Riskv1decisionsDeviceInformation();
		deviceInformation.fingerprintSessionId = req.body.deviceFingerPrintID
		deviceInformation.ipAddress = req.body.ip;
		requestObj.deviceInformation = deviceInformation;


		// Merchant Defined Data (MDD) information, required by cybersource

		var merchantDefinedInformation = new Array();
		var merchantDefinedInformation1 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation1.key = '1';
		merchantDefinedInformation1.value = 'bc_5808459559';
		merchantDefinedInformation.push(merchantDefinedInformation1);

		var merchantDefinedInformation2 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation2.key = '2';
		merchantDefinedInformation2.value = 'WEB';
		merchantDefinedInformation.push(merchantDefinedInformation2);

		var merchantDefinedInformation3 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation3.key = '3';
		merchantDefinedInformation3.value = info.clientReferenceInformationCode;
		merchantDefinedInformation.push(merchantDefinedInformation3);


		var merchantDefinedInformation4 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation4.key = '4';
		merchantDefinedInformation4.value = 'P-3DS Joyeria';
		merchantDefinedInformation.push(merchantDefinedInformation4);

		var merchantDefinedInformation5 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation5.key = '5';
		merchantDefinedInformation5.value = 'INVERSIONES MIMI, C.A.';
		merchantDefinedInformation.push(merchantDefinedInformation5);


		var merchantDefinedInformation6 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation6.key = '6';
		merchantDefinedInformation6.value = '5094 Precious Stones/Metals/Jewe';
		merchantDefinedInformation.push(merchantDefinedInformation6);


		var merchantDefinedInformation7 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation7.key = '7';
		merchantDefinedInformation7.value = req.body.documentId;
		merchantDefinedInformation.push(merchantDefinedInformation7);


		var merchantDefinedInformation8 = new cybersourceRestApi.Riskv1decisionsMerchantDefinedInformation();
		merchantDefinedInformation8.key = '8';
		merchantDefinedInformation8.value = 'NO';
		merchantDefinedInformation.push(merchantDefinedInformation8);

		requestObj.merchantDefinedInformation = merchantDefinedInformation;

		var consumerAuthenticationInformation = new cybersourceRestApi.Ptsv2paymentsConsumerAuthenticationInformation();
		consumerAuthenticationInformation.transactionId = info.transactionId;
		consumerAuthenticationInformation.signedPares = info.signedPares;
		consumerAuthenticationInformation.cavv = info.cavv
		consumerAuthenticationInformation.xid = info.xid
		consumerAuthenticationInformation.ecommerceIndicator = info.ecommerceIndicator
		consumerAuthenticationInformation.eciRaw = info.eciRaw
		consumerAuthenticationInformation.transactionToken = info.transactionToken
		consumerAuthenticationInformation.ucafCollectionIndicator = info.ucafCollectionIndicator
		consumerAuthenticationInformation.ucafAuthenticationData = info.ucafAuthenticationData
		consumerAuthenticationInformation.veresEnrolled = info.veresEnrolled
		consumerAuthenticationInformation.directoryServerTransactionId = info.directoryServerTransactionId
		requestObj.consumerAuthenticationInformation = consumerAuthenticationInformation

		var tokenInformation = new cybersourceRestApi.Ptsv2paymentsTokenInformation();
		tokenInformation.transientTokenJwt = process.env.SECRET_KEY;
		requestObj.tokenInformation = tokenInformation;
		var instance2 = new cybersourceRestApi.PaymentsApi(configObject, apiClient);



		instance2.createPayment(requestObj, async function (error, data, response) {
			payStatus = JSON.parse(response['text'])
			res.send(payStatus)

			// if (payStatus.status == 'AUTHORIZED') {


			// 	const cartId = await Store.Cart.findAll({
			// 		where: {
			// 			ownerId: userId,
			// 		},
			// 		attributes: ['id']
			// 	})


			// 	Store.CartProduct.findAll({
			// 		where: {
			// 			cartId: cartId[0].dataValues.id
			// 		}
			// 	})
			// 		.then(async (d) => {

			// 			const products = d


			// 			const createBill = await Store.Bill.create({
			// 				codigo: info.clientReferenceInformationCode,
			// 				direccion: info.orderInformationBillToAddress,
			// 				pais: info.orderInformationBillToCountry,
			// 				ciudad: info.orderInformationBillToLocality,
			// 				total: `${info.orderInformationAmountTotal}`,
			// 				ownerId: userId
			// 			})
			// 			const data = []
			// 			for (let item = 0; item < products.length; item++) {
			// 				data.push({})
			// 				for (const key in products[item].dataValues) {

			// 					if (key !== "cartId") {
			// 						data[data.length - 1][key] = products[item].dataValues[key]
			// 					} else {
			// 						data[data.length - 1]["billId"] = createBill.dataValues.id
			// 					}
			// 				}
			// 			}

			// 			return data
			// 		})

			// 		.then((d) => {

			// 			Store.BillProduct.bulkCreate(d).then((result) => {
			// 			})
			// 		})
			// 		.then((d) => {

			// 			Store.CartProduct.destroy({
			// 				where: {
			// 					cartId: cartId[0].dataValues.id
			// 				}
			// 			})
			// 		})
			// 		.then(() => res.redirect("/api/paymail/" + info.clientReferenceInformationCode))
			// 		.catch((error) => {

			// 			res.sendStatus(500).send(error)
			// 		})



			// }
			// else {
			// 	res.sendStatus(400).send(payStatus)
			// }


		})









	}
	catch (error) {
	}

}


