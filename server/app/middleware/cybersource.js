const config = require('../config/cybersource.config');
const cybersourceRestApi = require('cybersource-rest-client');

function payment(info){

	console.log('*****');
	console.log('*****');
	console.log('*****');
	console.log('*****');
	console.log(info);	

	console.log('*****');
	console.log('*****');
	console.log('*****');
	console.log('*****');


    // try {
	// 	var configObject = new config();
	// 	var apiClient = new cybersourceRestApi.ApiClient();
	// 	var requestObj = new cybersourceRestApi.CreatePaymentRequest();

	// 	var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
	// 	clientReferenceInformation.code = 'TC50171_3';
	// 	requestObj.clientReferenceInformation = clientReferenceInformation;

	// 	var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
	// 	var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
	// 	orderInformationAmountDetails.totalAmount = '102.21';
	// 	orderInformationAmountDetails.currency = 'USD';
	// 	orderInformation.amountDetails = orderInformationAmountDetails;

	// 	var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
	// 	orderInformationBillTo.firstName = 'RTS';
	// 	orderInformationBillTo.lastName = 'VDP';
	// 	orderInformationBillTo.address1 = '201 S. Division St.';
	// 	orderInformationBillTo.locality = 'Ann Arbor';
	// 	orderInformationBillTo.administrativeArea = 'MI';
	// 	orderInformationBillTo.postalCode = '48104-2201';
	// 	orderInformationBillTo.country = 'US';
	// 	orderInformationBillTo.district = 'MI';
	// 	orderInformationBillTo.buildingNumber = '123';
	// 	orderInformationBillTo.email = 'test@cybs.com';
	// 	orderInformationBillTo.phoneNumber = '999999999';
	// 	orderInformation.billTo = orderInformationBillTo;

	// 	requestObj.orderInformation = orderInformation;

	// 	var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
	// 	var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
	// 	paymentInformationCard.number = '4111111111111111';
	// 	paymentInformationCard.expirationMonth = '12';
	// 	paymentInformationCard.expirationYear = '2031';
	// 	paymentInformation.card = paymentInformationCard;

	// 	requestObj.paymentInformation = paymentInformation;



	// 	var tokenInformation = new cybersourceRestApi.Ptsv2paymentsTokenInformation();
	// 	tokenInformation.transientTokenJwt = process.env.SECRET_KEY;
	// 	requestObj.tokenInformation = tokenInformation;


	// 	var instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);

	// 	instance.createPayment( requestObj, function (error, data, response) {
	// 		if(error) {
	// 			console.log('\nError : ' + JSON.stringify(error));
	// 		}
	// 		else if (data) {
	// 			console.log('\nData : ' + JSON.stringify(data));
	// 		}

	// 		console.log('\nResponse : ' + JSON.stringify(response));
	// 		console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
	// 		console.log('\nResponse text : ' + JSON.stringify(response['text']));
	// 		var status = response['status'];
	// 		callback(error, data, response);
	// 	});
	// }
	// catch (error) {
	// 	console.log('\nException on calling the API : ' + error);
	// }
    



}
module.exports.payment = payment;



