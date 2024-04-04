const config = require('../config/cybersource.config');
const cybersourceRestApi = require('cybersource-rest-client');

function payment(info){



    try {
		var configObject = new config();
		var apiClient = new cybersourceRestApi.ApiClient();
		var requestObj = new cybersourceRestApi.CreatePaymentRequest();

		var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code =  info.clientReferenceInformationCode;
		requestObj.clientReferenceInformation = clientReferenceInformation;

		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
		orderInformationAmountDetails.totalAmount =  info.orderInformationAmountTotal;
		orderInformationAmountDetails.currency = info.orderInformationAmountCurrency;
		orderInformation.amountDetails = orderInformationAmountDetails;

		var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
		orderInformationBillTo.firstName = info.orderInformationBillToFirstName;
		orderInformationBillTo.lastName = info.orderInformationBillToLastName;
		orderInformationBillTo.address1 = info.orderInformationBillToAddress;
		orderInformationBillTo.locality = info.orderInformationBillToLocality;
		orderInformationBillTo.administrativeArea = info.orderInformationBillToAdministrativeArea;
		orderInformationBillTo.postalCode = info.orderInformationBillToPostalCode;
		orderInformationBillTo.country = info.orderInformationBillToCountry;
		orderInformationBillTo.district = info.orderInformationBillToDistrict;
		orderInformationBillTo.buildingNumber = info.orderInformationBillToBuildingNumber;
		orderInformationBillTo.email = info.orderInformationBillToEmail;
		orderInformationBillTo.phoneNumber = info.orderInformationBillToPhoneNumber;
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

		instance.createPayment( requestObj, function (error, data, response) {
			if(error) {
				console.log('\nError : ' + JSON.stringify(error));
			}
			else if (data) {
				console.log('\nData : ' + JSON.stringify(data));
			}

			console.log('\nResponse : ' + JSON.stringify(response));
			console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
			console.log('\nResponse text : ' + JSON.stringify(response['text']));
			var status = response['status'];
			callback(error, data, response);
			return JSON.stringify(response)
		});
	}
	catch (error) {
		console.log('\nException on calling the API : ' + error);
	}
    



}
module.exports.payment = payment;



