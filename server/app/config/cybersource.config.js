'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/


// common parameters
const AuthenticationType = 'http_signature';
const RunEnvironment = process.env.CYBERSOURCE_RUN_ENVIROMENT;
const MerchantId = process.env.CYBERSOURCE_MERCHANT_ID;

// http_signature parameters
const MerchantKeyId = process.env.CYBERSOURCE_MERCHANT_KEY;
const MerchantSecretKey = process.env.CYBERSOURCE_SECRET_KEY;

// jwt parameters
const KeysDirectory = 'Resource';
const KeyFileName = MerchantId;
const KeyAlias = MerchantId;
const KeyPass = MerchantId;

//meta key parameters
const UseMetaKey = false;
const PortfolioID = '';

// logging parameters
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = 'log';
const LogfileMaxSize = '5242880'; //10 MB In Bytes
const EnableMasking = true;

/*
PEM Key file path for decoding JWE Response Enter the folder path where the .pem file is located.
It is optional property, require adding only during JWE decryption.
*/
const PemFileDirectory = 'Resource/NetworkTokenCert.pem';

// Constructor for Configuration
function Configuration() {

    var configObj = {
        'authenticationType': AuthenticationType,
        'runEnvironment': RunEnvironment,

        'merchantID': MerchantId,
        'merchantKeyId': MerchantKeyId,
        'merchantsecretKey': MerchantSecretKey,

        'keyAlias': KeyAlias,
        'keyPass': KeyPass,
        'keyFileName': KeyFileName,
        'keysDirectory': KeysDirectory,

        'useMetaKey': UseMetaKey,
        'portfolioID': PortfolioID,
        'pemFileDirectory': PemFileDirectory,

        'logConfiguration': {
            'enableLog': EnableLog,
            'logFileName': LogFileName,
            'logDirectory': LogDirectory,
            'logFileMaxSize': LogfileMaxSize,
            'loggingLevel': 'debug',
            'enableMasking': EnableMasking
        }
    };
    return configObj;

}

module.exports = Configuration;