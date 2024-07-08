const transport = require("../config/transporter.config");
const db = require("../models");
const Store = db.store;
const Op = db.Sequelize.Op;



const mailOptions = {
  from: 'tec.sidigital@gmail.com',
  to: 'mzorrilla.sidigital@gmail.com',
  subject: 'Mensaje de prueba',
  text: 'Este mensaje es de prueba'
}


// Test route.
exports.sendNewsletter = (req, res) => {
  const mailOptions = {
    from: 'mzorrilla.sidigital@gmail.com',
    to: 'manuelzorrilladev@gmail.com',
    subject: 'Mensaje de prueba',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
        <script async crossorigin="anonymous" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/https://edge.fullstory.com/s/fs.js"></script>
    
        <!-- DO NOT REMOVE -->
        <style>
    
            /* CONFIG STYLES Please do not delete and edit CSS styles below */
    /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
    .rollover span {
        font-size: 0;
    }
    
    #outlook a {
        padding: 0;
    }
    
    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }
    
    /*
    END OF IMPORTANT
    */
    body {
        width: 100%;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    
    table td,
    body,
    .es-wrapper {
        padding: 0;
        Margin: 0;
    }
    
    .es-content,
    .es-header,
    .es-footer {
        table-layout: fixed !important;
        width: 100%;
    }
    
    img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    p,
    hr {
        Margin: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        Margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }
    
    p,
    ul li,
    ol li,
    a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
    }
    
    .es-left {
        float: left;
    }
    
    .es-right {
        float: right;
    }
    
    .es-p5 {
        padding: 5px;
    }
    
    .es-p5t {
        padding-top: 5px;
    }
    
    .es-p5b {
        padding-bottom: 5px;
    }
    
    .es-p5l {
        padding-left: 5px;
    }
    
    .es-p5r {
        padding-right: 5px;
    }
    
    .es-p10 {
        padding: 10px;
    }
    
    .es-p10t {
        padding-top: 10px;
    }
    
    .es-p10b {
        padding-bottom: 10px;
    }
    
    .es-p10l {
        padding-left: 10px;
    }
    
    .es-p10r {
        padding-right: 10px;
    }
    
    .es-p15 {
        padding: 15px;
    }
    
    .es-p15t {
        padding-top: 15px;
    }
    
    .es-p15b {
        padding-bottom: 15px;
    }
    
    .es-p15l {
        padding-left: 15px;
    }
    
    .es-p15r {
        padding-right: 15px;
    }
    
    .es-p20 {
        padding: 20px;
    }
    
    .es-p20t {
        padding-top: 20px;
    }
    
    .es-p20b {
        padding-bottom: 20px;
    }
    
    .es-p20l {
        padding-left: 20px;
    }
    
    .es-p20r {
        padding-right: 20px;
    }
    
    .es-p25 {
        padding: 25px;
    }
    
    .es-p25t {
        padding-top: 25px;
    }
    
    .es-p25b {
        padding-bottom: 25px;
    }
    
    .es-p25l {
        padding-left: 25px;
    }
    
    .es-p25r {
        padding-right: 25px;
    }
    
    .es-p30 {
        padding: 30px;
    }
    
    .es-p30t {
        padding-top: 30px;
    }
    
    .es-p30b {
        padding-bottom: 30px;
    }
    
    .es-p30l {
        padding-left: 30px;
    }
    
    .es-p30r {
        padding-right: 30px;
    }
    
    .es-p35 {
        padding: 35px;
    }
    
    .es-p35t {
        padding-top: 35px;
    }
    
    .es-p35b {
        padding-bottom: 35px;
    }
    
    .es-p35l {
        padding-left: 35px;
    }
    
    .es-p35r {
        padding-right: 35px;
    }
    
    .es-p40 {
        padding: 40px;
    }
    
    .es-p40t {
        padding-top: 40px;
    }
    
    .es-p40b {
        padding-bottom: 40px;
    }
    
    .es-p40l {
        padding-left: 40px;
    }
    
    .es-p40r {
        padding-right: 40px;
    }
    
    .es-menu td {
        border: 0;
    }
    
    .es-menu td a img {
        display: inline-block !important;
        vertical-align: middle;
    }
    
    /*
    END CONFIG STYLES
    */
    s {
        text-decoration: line-through;
    }
    
    p,
    ul li,
    ol li {
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        line-height: 150%;
    }
    
    ul li,
    ol li {
        Margin-bottom: 15px;
        margin-left: 0;
    }
    
    a {
        text-decoration: underline;
    }
    
    .es-menu td a {
        text-decoration: none;
        display: block;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }
    
    .es-wrapper {
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-wrapper-color,
    .es-wrapper {
        background-color: #f6f6f6;
    }
    
    .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-header-body {
        background-color: #ffffff;
    }
    
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-header-body a {
        color: #0968AC;
        font-size: 14px;
    }
    
    .es-content-body {
        background-color: #ffffff;
    }
    
    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-content-body a {
        color: #be0100;
        font-size: 14px;
    }
    
    .es-footer {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-footer-body {
        background-color: #ffffff;
    }
    
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-footer-body a {
        color: #ffffff;
        font-size: 14px;
    }
    
    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
    }
    
    .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
    }
    
    h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px;
    }
    
    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 24px;
    }
    
    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px;
    }
    
    a.es-button,
    button.es-button {
        padding: 10px 20px 10px 20px;
        display: inline-block;
        background: #be0100;
        border-radius: 30px;
        font-size: 18px;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
        mso-padding-alt: 0;
        mso-border-alt: 10px solid #be0100;
    }
    
    .es-button-border {
        border-style: solid solid solid solid;
        border-color: #0968AC #0968AC #0968AC #0968AC;
        background: #be0100;
        border-width: 0px 0px 2px 0px;
        display: inline-block;
        border-radius: 30px;
        width: auto;
    }
    
    .msohide {
        mso-hide: all;
    }
    
    /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    @media only screen and (max-width: 600px) {
    
        p,
        ul li,
        ol li,
        a {
            line-height: 150% !important;
        }
    
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
            line-height: 120%;
        }
    
        h1 {
            font-size: 30px !important;
            text-align: left;
        }
    
        h2 {
            font-size: 24px !important;
            text-align: left;
        }
    
        h3 {
            font-size: 20px !important;
            text-align: left;
        }
    
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 30px !important;
            text-align: left;
        }
    
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 24px !important;
            text-align: left;
        }
    
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px !important;
            text-align: left;
        }
    
        .es-menu td a {
            font-size: 14px !important;
        }
    
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 16px !important;
        }
    
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
            font-size: 14px !important;
        }
    
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 10px !important;
        }
    
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important;
        }
    
        *[class="gmail-fix"] {
            display: none !important;
        }
    
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important;
        }
    
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important;
        }
    
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important;
        }
    
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important;
        }
    
        .es-button-border {
            display: inline-block !important;
        }
    
        a.es-button,
        button.es-button {
            font-size: 18px !important;
            display: inline-block !important;
        }
    
        .es-adaptive table,
        .es-left,
        .es-right {
            width: 100% !important;
        }
    
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important;
        }
    
        .es-adapt-td {
            display: block !important;
            width: 100% !important;
        }
    
        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }
    
        .es-m-p0 {
            padding: 0px !important;
        }
    
        .es-m-p0r {
            padding-right: 0px !important;
        }
    
        .es-m-p0l {
            padding-left: 0px !important;
        }
    
        .es-m-p0t {
            padding-top: 0px !important;
        }
    
        .es-m-p0b {
            padding-bottom: 0 !important;
        }
    
        .es-m-p20b {
            padding-bottom: 20px !important;
        }
    
        .es-mobile-hidden,
        .es-hidden {
            display: none !important;
        }
    
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
        }
    
        tr.es-desk-hidden {
            display: table-row !important;
        }
    
        table.es-desk-hidden {
            display: table !important;
        }
    
        td.es-desk-menu-hidden {
            display: table-cell !important;
        }
    
        .es-menu td {
            width: 1% !important;
        }
    
        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important;
        }
    
        table.es-social {
            display: inline-block !important;
        }
    
        table.es-social td {
            display: inline-block !important;
        }
    
        .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
        }
    
        .h-auto {
            height: auto !important;
        }
    }
    
    /* END RESPONSIVE STYLES */
    .es-p-default {
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 0px;
        padding-left: 20px;
    }
    
    .es-p-all-default {
        padding: 0px;
    }
    
        </style>
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f6f6f6"></v:fill>
          </v:background>
        <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;" esd-custom-block-id="92632">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <!-- Please replace the text between the <b></b> tag with your logo text. -->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p15" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Please insert your logo image in the same folder of the index.html file and change the path below in src attribute with the file extension.  
                                                                                            Ex -> your_logo.jpg
    
                                                                                            You can also change the alt and title attribute by replacing Tudor logo with your text
    
                                                                                            Ex -> alt="My logo"
                                                                                            -->
    
                                                                                            <!-- Please replace image source in src attribute
                                                                                                Important -> The image of your logo can be in format .png or jpg but it has to be located in the same folder of the index.html file.
                                                                                            -->
                                                                                            <img src="https://www.mimijoyeria.com/assets/mimi-logo.png" alt="Tudor logo" style="display: block; font-size: 12px;" height="103" title="Tudor logo"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10">
                                                                                            <h2 style="font-size: 21px; color: #b22222;"><strong>Presentando los nuevos y atrevidos modelos de TUDOR</strong></h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Banner image -->
                                                                                            <img class="adapt-img" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/T24_PRO_M7939G1A0NRU-0001_077.jpg" alt="4 models" style="display: block; font-size: 12px;" width="600" title="4 models"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p><br></p>
                                                                                            <p>En Watches & Wonders 2024, TUDOR presentó cuatro nuevas incorporaciones a su atrevida gama de productos. Estos nuevos relojes conservan elementos característicos del pasado de la marca y al mismo tiempo allanan el camino con innovaciones técnicas que apuntan al futuro.</p>
                                                                                            <p><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <!-- In order to change the redirection of the button please change the URL inside href="" with the url of your page, even in the lines commented that start with [if mso] like below. ex href="https://my-site.com/tudor"-->
                                                                                        <td align="center" class="esd-block-button es-p5">
                                                                                            <!--[if mso]><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" target="_blank" hidden>
                                                                                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" 
                                                                                                            style="height:39px; v-text-anchor:middle; width:162px" arcsize="50%" stroke="f"  fillcolor="#be0100">
                                                                                                    <w:anchorlock></w:anchorlock>
                                                                                                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Descubrir</center>
                                                                                                </v:roundrect></a>
                                                                                            <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-width: 0px; border-color: #be0100; background: #be0100;"><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-watches.html" class="es-button es-button-1705584500964" target="_blank" style="background: #be0100; font-size: 16px; padding: 10px 20px;">Descubrir</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20t es-p20b es-p15r es-p15l" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p15b es-p35r es-p35l" align="left" style="border-radius: 65px;">
                                                            <!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="250" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="250" align="left" class="esd-container-frame es-m-p20b">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5t" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Grid first image -->
                                                                                            <img class="adapt-img" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/T24_PRO_M7941A1A0NU-0002_087.png" alt="58 GMT" style="display: block; font-size: 12px; border-radius: 10px;" width="230" title="58 GMT"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="260" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="260" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5b es-p5r es-p5l">
                                                                                            <p style="text-align: center; font-size: 18px;"><strong>Black Bay 58 GMT</strong></p>
                                                                                            <p style="display: none;"><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10">
                                                                                            <p style="color: #808080; text-align: justify;">Conozca el Black Bay 58 GMT, una incorporación completamente nueva a la línea Black Bay, que presenta la característica caja de 39 mm del Black Bay 58, equipada con el nuevo calibre de manufactura GMT de tamaño mediano MT5450-U de TUDOR.&nbsp;</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <!-- In order to change the redirection of the button please change the URL inside href="" with the url of your page, even in the lines commented that start with [if mso] like below. ex href="https://my-site.com/tudor"-->
                                                                                        <td align="center" class="esd-block-button es-p10">
                                                                                            <!--[if mso]><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" 
                    style="height:39px; v-text-anchor:middle; width:162px" arcsize="50%" stroke="f"  fillcolor="#be0100">
        <w:anchorlock></w:anchorlock>
        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Descubrir</center>
      </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-width: 0px; border-color: #be0100; background: #be0100;"><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-watches/black-bay-58-gmt.html" class="es-button es-button-1710236774668" target="_blank" style="background: #be0100; padding: 10px 20px; font-size: 16px; mso-border-alt: 10px solid #be0100">Descubrir</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p15b es-p20r es-p20l" align="left">
                                                            <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="270" align="left" class="esd-container-frame es-m-p20b">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5b es-p5r es-p5l">
                                                                                            <p style="text-align: center; font-size: 18px;"><strong>Black Bay</strong></p>
                                                                                            <p style="display: none;"><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t es-p10b es-p5l">
                                                                                            <p style="color: #808080; text-align: justify;">La última versión del Black Bay de TUDOR con una estética monocromática, disponible con un brazalete de acero inoxidable de 5 eslabones con acabados pulido y satinado, con cierre TUDOR “T-fit”.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="270" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5t" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Grid second image -->
                                                                                            <img class="adapt-img" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/T24_PRO_M7941A1A0NU-0003_085.png" alt="Black Bay" style="display: block; font-size: 12px; border-radius: 10px;" width="230" title="Black Bay"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" esd-custom-block-id="88273">
                                            <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                                                                                                            <!-- In order to change the redirection of the button please change the URL inside href="" with the url of your page, even in the lines commented that start with [if mso] like below. ex href="https://my-site.com/tudor"-->
                                                                                        <td align="center" class="esd-block-button es-p5">
                                                                                            <!--[if mso]><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" 
                    style="height:39px; v-text-anchor:middle; width:162px" arcsize="50%" stroke="f"  fillcolor="#be0100">
        <w:anchorlock></w:anchorlock>
        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Descubrir</center>
      </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-width: 0px; border-color: #be0100; background: #be0100;"><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-watches/black-bay.html" class="es-button es-button-1710236802558" target="_blank" style="background: #be0100; font-size: 16px; padding: 10px 20px; mso-border-alt: 10px solid #be0100">Descubrir</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p35t es-p15b es-p35r es-p35l" align="left">
                                                            <!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="252" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="252" class="es-m-p20b esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5t" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Grid third image -->
                                                                                            <img class="adapt-img" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/T24_PRO_M79018V-0006_096.png" alt="58 18K" style="display: block; font-size: 12px; border-radius: 10px;" width="230" title="58 18K"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="258" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="258" class="esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5b es-p5r es-p5l">
                                                                                            <p style="text-align: center; font-size: 18px;"><strong>Black Bay 58 18K</strong></p>
                                                                                            <p style="display: none;"><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t es-p10b">
                                                                                            <p style="color: #808080; text-align: justify;">Conozca el nuevo TUDOR Black Bay 58 18K, con caja de oro macizo de 39 mm&nbsp;</p>
                                                                                            <p style="color: #808080; text-align: justify;">Brazalete de 3 eslabones, esfera y bisel "verde dorado" y calibre de manufactura certificado COSC<em>.</em></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p10t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                                                                                                            <!-- In order to change the redirection of the button please change the URL inside href="" with the url of your page, even in the lines commented that start with [if mso] like below. ex href="https://my-site.com/tudor"-->
                                                                                        <td align="center" class="esd-block-button es-p5">
                                                                                            <!--[if mso]><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" 
                    style="height:39px; v-text-anchor:middle; width:162px" arcsize="50%" stroke="f"  fillcolor="#be0100">
        <w:anchorlock></w:anchorlock>
        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Descubrir</center>
      </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-width: 0px; border-color: #be0100; background: #be0100;"><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-watches/black-bay-58-18k.html" class="es-button es-button-1710236810998" target="_blank" style="background: #be0100; font-size: 16px; padding: 10px 20px; mso-border-alt: 10px solid #be0100">Descubrir</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p15b es-p35r es-p30l" align="left">
                                                            <!--[if mso]><table width="535" cellpadding="0" cellspacing="0"><tr><td width="255" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="255" class="es-m-p20b esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5b es-p5r es-p5l">
                                                                                            <p style="text-align: center; font-size: 18px;"><strong>Clair de Rose</strong></p>
                                                                                            <p style="display: none;"><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t es-p10b es-p10l">
                                                                                            <p style="color: #808080; text-align: justify;">Con un guiño a sus códigos estéticos pasados, TUDOR presenta su característica esfera "TUDOR Blue" en el atrevido pero delicado Clair de Rose, disponible con números romanos o marcadores de hora de diamantes..</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="260" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="260" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank">
                                                                                            <!-- Grid fourth image -->
                                                                                            <img class="adapt-img" src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/T24_PRO_M35800-0010_103.png" alt="Clair de Rose" style="display: block; font-size: 12px; border-radius: 10px;" width="230" title="Clair de Rose"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                                                                                                            <!-- In order to change the redirection of the button please change the URL inside href="" with the url of your page, even in the lines commented that start with [if mso] like below. ex href="https://my-site.com/tudor"-->
                                                                                        <td align="center" class="esd-block-button es-p5">
                                                                                            <!--[if mso]><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://tocc.mytudornetwork.com/content/tudor/en/latest-campaigns" 
                    style="height:39px; v-text-anchor:middle; width:162px" arcsize="50%" stroke="f"  fillcolor="#be0100">
        <w:anchorlock></w:anchorlock>
        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Descubrir</center>
      </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-width: 0px; border-color: #be0100; background: #be0100;"><a href="https://tocc.mytudornetwork.com/content/tudor/en/latest-watches/clair-de-rose.html" class="es-button es-button-1710236817449" target="_blank" style="background: #be0100; font-size: 16px; padding: 10px 20px; mso-border-alt: 10px solid #be0100">Descubrir</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20t es-p10b es-p10r es-p10l" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-social es-p10" style="font-size:0">
                                                                                            <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                <tbody>
                                                                                                       <!-- To change the URL of the logos butotn please replace the it in the href attribute. EX -> href"https://www.facebook.com/myPage" -->
                                                                                                    <tr>
                                                                                                        <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.facebook.com/inversionesmimijoyeria">
                                                                                                            <!-- Facebook logo -->
                                                                                                            <img src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/facebook-logo-black.png" alt="Fb" title="Facebook" width="32"></a></td>
                                                                                                        <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.instagram.com/mimijoyeria/">
                                                                                                            <!-- Instagram logo -->
                                                                                                            <img src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/instagram-logo-black.png" alt="Ig" title="Instagram" width="32"></a></td>
                                                                                                        
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#333333" style="background-color: #333333;">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text" bgcolor="#333333">
                                                                                            <p style="line-height: 120%; font-size: 11px; color: #efefef;">
                                                                                                Montres TUDOR SA respeta su derecho a la privacidad y se compromete a mantener su confianza y confianza.</p>
                                                                                            <p style="line-height: 120%; font-size: 11px; color: #efefef;"><br>Cualquier información que nos proporcione a través de nuestro sitio web no será vendida ni alquilada.<br><br>Montres TUDOR SA no recopila ninguna información suya sin su conocimiento y permiso, y no le solicita que ingrese ninguna información personal para acceder al sitio web.</p>
                                                                                            <p style="line-height: 120%; font-size: 11px; color: #efefef;"><br>La información que usted proporciona a Montres TUDOR SA se almacena en un lugar seguro y solo el personal designado puede acceder a ella.</p>
                                                                                            <p style="line-height: 120%; font-size: 11px; color: #efefef;"><br></p>
                                                                                            <p style="line-height: 120%; font-size: 11px; color: #efefef;">© Montres TUDOR SA, Ginebra, Suiza</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p15" style="font-size: 0px;"><a target="_blank" href="https://www.tudorwatch.com"><img src="https://www.mimijoyeria.com/storage/mail-assets/newsletter-assets/tudor_logo__v_redwhite__rvb_2015.png" alt="Tudor Watch" style="display: block;" title="Tudor Watch" width="60"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5b" esd-links-color="#333333">
                                                                                            <p>No quieres recibir más este correo ? <a data-msys-unsubscribe="1" data-msys-linkname="batch::unsub" href="https://content.tudorwatch.com/unsubscribe/" style="color: #333333;">Unsubscribe</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`
  }

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      res.status(200).send('Message sended successfully: ' + info)

    }
  })

};
exports.rolexContact = (req, res) => {
  // console.log(req.body.body)
  // const date = new Date()
  const date = new Date()
  const actualDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  const actualHour = `${date.getHours()}:${date.getMinutes()}`

  const mailOptions = {
    from: 'plataformapagos@mimijoyeria.com',
    to: 'mzorrilla.sidigital@gmail.com',
    subject: `Mensaje de parte de: ${req.body.tto}. ${req.body.nombre} ${req.body.apellido}`,
    html: `  <main style="margin: 40px 0px;">
    <h3 style="
        text-align: center;
        width: 100%;
        padding: 30px 0px;
    
    ">
        <img src="https://www.mimijoyeria.com/assets/rolex-retailer.webp" alt="" />
    </h3>
    <h2 style="font-size: 20px;text-align: center;">SOLICITUD DE ASESORAMIENTO DE UN EXPERTO ROLEX</h2>
    <h2 style="font-size: 17px;text-align: center;">
        Estimado Distribuidor Oficial Rolex: <br>
        Tenemos el placer de informarle de que un cliente le ha enviado 
        una consulta<br> a través del formulario de contacto de su sección Rolex. 
        Encuentre los detalles de esta consulta a continuación:
    </h2>
    <h3 style="
    text-align: center;
    width: 100%;
    
    ">
        <img src="http://www.mimijoyeria.com/storage/rolex-relojes/${req.body.modelo}.avif" alt="" style=" width: 30%;">
    </h3>
    <header style="text-align: center; ">
        <h3 style="font-weight: 700;">${req.body.watch}</h3>
        <h3>${req.body.cajaDelModelo}</h3>
        <h3>Referencia: ${req.body.modelo}</h3>
    </header>
        <div style="text-align:center;">
            <h3 style="font-weight: 300; text-decoration: underline;">Información de la consulta: </h3>
            <p><strong>Fecha:</strong> ${actualDate}</p>
            
            <p><strong>Hora:</strong> ${actualHour}</p>
            <p><strong>Página origen de la solicitud:</strong> Página del modelo</p>
            <p><strong>RMC Del modelo de la solicitud:</strong> ${req.body.modelo} </p>
            <h3 style="font-weight: 300; text-decoration: underline;">Información del cliente: </h3>
            <p><strong>Nombre Completo:</strong> ${req.body.nombre} ${req.body.apellido}</p>
            
            <p><strong>Número de teléfono del cliente:</strong> </p>
            <p>${req.body.telefono}</p>
            <p><strong>Correo Electronico del cliente:</strong> </p>
            <p>${req.body.email}</p>
            <p><strong>Mensaje del cliente:</strong></p>
            <p>${req.body.mensaje}</p>
        </div>


</main>`
  }

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      res.status(200).send('Message sended successfully: ' + info)

    }
  })

};
exports.rolexNewContact = (req, res) => {
  console.log(req.body);

  const message = `<div style=" width: 98vw; overflow-x: hidden; text-align: center; margin: 0; ">
  <div class="main-container" style=" width: 100%;">
    <div
      class="container"
      style="
        background-color: #f5eeea;
        min-height: 100vh;
        height: fit-content;
        padding: 20px 0px;
       
      "
    >
      <p style="padding-left: 132pt; text-indent: 0pt; text-align: left">
        <span
          ><table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <p style="text-align: center; width: 98vw;">
                  <img
                    width="120"
                    height="60"
                    style=""
                    src="http://www.mimijoyeria.com/storage/mail-assets/rolex-service-plaque.jpg"
                  />
                </p>
              </td>
            </tr></table
        ></span>
      </p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p
        style="
          padding: 0pt 40px;
          text-align: center;
          color: #462c1f;
          font-family: Arial, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 18pt;
        "
      >
        Tienes un nuevo mensaje, de parte del formulario de contacto de
        <a
          href="http://www.mimijoyeria.com/"
          target="_blank"
          style="
            color: #462c1f;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: underline;
            font-size: 18pt;
          "
          >www.mimijoyeria.com</a
        >
      </p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p
        class="s1"
        style="
          padding: 0pt 60px;
          text-indent: 0pt;
          text-align: center;
          font-size: 14pt;
          font-weight: 300;
          font-style: italic;
          color: black;
          font-family: Calibri, sans-serif;
          font-weight: light;
          text-decoration: none;
          font-size: 18pt;
          padding: 25px 0px;
        "
      >
        ${req.body.message}
      </p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p
        class="s1"
        style="
          padding: 20px 70px;
          width: 80%;
          text-indent: 0pt;
          text-align: left;
          color: #462c1f;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 18pt;
        "
      >
        Información del usuario:
      </p>
      <ul id="l1" style="padding: 0pt 0px; width: 100%; text-align: left;">
        <li data-list-text="•" style="padding: 0px 70px; display: block">
          <p
            class="s2"
            style="
              color: black;
              font-family: Calibri, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 14pt;
            "
          >
            •Nombre: ${req.body.tto} ${req.body.name} ${req.body.lastName}
          </p>
        </li>
        <li data-list-text="•" style="padding: 0px 70px; display: block">
          <p
            class="s2"
            style="
              color: black;
              font-family: Calibri, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 14pt;
            "
          >
            •Email: ${req.body.email}
          </p>
        </li>

        <li data-list-text="•" style="padding: 0px 70px; display: block">
          <p
            class="s2"
            style="
              color: black;
              font-family: Calibri, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 14pt;
            "
          >
            •Telefono: ${req.body.phone}
          </p>
        </li>
        <li data-list-text="•" style="padding: 0px 70px; display: block">
          <p
            class="s2"
            style="
              color: black;
              font-family: Calibri, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 14pt;
            "
          >
            •País: ${req.body.country}
          </p>
        </li>
        <li data-list-text="•" style="padding: 0px 70px; display: block">
          <p
            class="s2"
            style="
              color: black;
              font-family: Calibri, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 14pt;
            "
          >
            •Region: ${req.body.region}
          </p>
        </li>
      </ul>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p style="padding-left: 145pt; text-indent: 0pt; text-align: left">
        <span
          ><table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <p style="text-align: center; width: 98vw;">
                  <img
                    width="120"
                    height="60"
                    src="http://www.mimijoyeria.com/storage/mail-assets/rolex-footer.png"
                  />
                </p>
              </td>
            </tr></table
        ></span>
      </p>
      <p style="padding-top: 10pt; text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
          padding: 0px 60px;
          text-indent: 0pt;
          text-align: center;
          color: black;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 12pt;
          margin: 0pt;
        "
      >
        Este es un mensaje auto generado, si deseas responder, puedes
        utilizar los datos suministrados en dicho correo, la información
        suministrada en este correo, es estrictamente confidencial.
      </p>
    </div>
  </div> 
</div>`

  const mailOptions = {
    from: 'plataformapagos@mimijoyeria.com',
    to: 'mzorrilla.sidigital@gmail.com',
    subject: `Mensaje de parte de: ${req.body.tto}. ${req.body.name} ${req.body.lastName}`,
    html: message
  }

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      res.status(200).send('Message sended successfully: ' + info)

    }
  })

};

exports.payMail = async (req, res) => {
  const billData = await Store.Bill.findAll({
    where: { codigo: req.params.codigo },
    include: 'owner'
  })
  const parsedBillData = billData[0].dataValues

  const productSelector = await Store.BillProduct.findAll({
    where: {
      billId: parsedBillData.id
    },
    attributes: ['watchmakingId']
  })

  let watchesId = []

  for (let index = 0; index < productSelector.length; index++) {
    watchesId.push(productSelector[index].dataValues.watchmakingId);
  }

  const products = await Store.Watchmaking.findAll({
    where: {
      id: {
        [Op.or]: watchesId
      }
    },
    attributes: ['serie', 'nombre', 'precio']
  })

  let productsToTemplate = []

  products.forEach(element => {

    productsToTemplate.push(
      `<div
        id="content"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          height: 100%;
          background-color: transparent;
        "
        >
        <div
          class="u-col u-col-23p14"
          style="
            max-width: 320px;
            min-width: 115.7px;
            display: table-cell;
            vertical-align: top;
          "
        >
          <div
            style="
              height: 100%;
              width: 100% !important;
              border-radius: 0px;
              -webkit-border-radius: 0px;
              -moz-border-radius: 0px;
            "
          >
            <div
              style="
                box-sizing: border-box;
                height: 100%;
                padding: 0px;
                border-top: 0px solid transparent;
                border-left: 0px solid transparent;
                border-right: 0px solid transparent;
                border-bottom: 0px solid transparent;
                border-radius: 0px;
                -webkit-border-radius: 0px;
                -moz-border-radius: 0px;
              "
            >
              <table
                style="font-family: arial, helvetica, sans-serif"
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                border="0"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        overflow-wrap: break-word;
                        word-break: break-word;
                        padding: 0px;
                        font-family: arial, helvetica, sans-serif;
                      "
                      align="left"
                    >
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tr>
                          <td
                            style="padding-right: 0px; padding-left: 0px"
                            align="center"
                          >
                            <img
                              align="center"
                              border="0"
                              src="https://www.mimijoyeria.com/storage/store-products/${element.dataValues.serie}-1.webp"
                              alt="Hand Bag"
                              title="Hand Bag"
                              style="
                                outline: none;
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                                clear: both;
                                display: inline-block !important;
                                border: none;
                                height: auto;
                                float: none;
                                width: 100%;
                                max-width: 100px;
                                background-color: white; 
                                "
                              
                            />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div
          class="u-col u-col-54p33"
          style="
            max-width: 320px;
            min-width: 271.65px;
            display: table-cell;
            vertical-align: top;
          "
        >
          <div
            style="
              background-color: #ffffff;
              height: 100%;
              width: 100% !important;
              border-radius: 0px;
              -webkit-border-radius: 0px;
              -moz-border-radius: 0px;
            "
          >
            <div
              style="
                box-sizing: border-box;
                height: 100%;
                padding: 0px;
                border-top: 0px solid transparent;
                border-left: 0px solid transparent;
                border-right: 0px solid transparent;
                border-bottom: 0px solid transparent;
                border-radius: 0px;
                -webkit-border-radius: 0px;
                -moz-border-radius: 0px;
              "
            >
              <table
                style="font-family: arial, helvetica, sans-serif"
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                border="0"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        overflow-wrap: break-word;
                        word-break: break-word;
                        padding: 0px 10px 66px 20px;
                        font-family: arial, helvetica, sans-serif;
                      "
                      align="left"
                    >
                      <div
                        style="
                          font-size: 14px;
                          line-height: 140%;
                          text-align: left;
                          word-wrap: break-word;
                        "
                      >
                        <h3>
                          <span style="font-size: 18px; line-height: 25.2px"
                            >${element.dataValues.nombre}</span
                          >
                        </h3>
                        <p style="line-height: 140%">TUDOR</p>
                        <p style="font-size: 14px; line-height: 140%"> </p>
                        <p style="font-size: 14px; line-height: 140%"> </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div
          class="u-col u-col-22p53"
          style="
            max-width: 320px;
            min-width: 112.65px;
            display: table-cell;
            vertical-align: top;
          "
        >
          <div
            style="
              background-color: #ffffff;
              height: 100%;
              width: 100% !important;
              border-radius: 0px;
              -webkit-border-radius: 0px;
              -moz-border-radius: 0px;
            "
          >
            <div
              style="
                box-sizing: border-box;
                height: 100%;
                padding: 0px;
                border-top: 0px solid transparent;
                border-left: 0px solid transparent;
                border-right: 0px solid transparent;
                border-bottom: 0px solid transparent;
                border-radius: 0px;
                -webkit-border-radius: 0px;
                -moz-border-radius: 0px;
              "
            >
              <table
                style="font-family: arial, helvetica, sans-serif"
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                border="0"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        overflow-wrap: break-word;
                        word-break: break-word;
                        padding: 0px 10px 66px 20px;
                        font-family: arial, helvetica, sans-serif;
                      "
                      align="left"
                    >
                      <div
                        style="
                          font-size: 14px;
                          line-height: 140%;
                          text-align: left;
                          word-wrap: break-word;
                        "
                      >
                        <p style="font-size: 14px; line-height: 140%">
                          <strong
                            ><span
                              style="
                                font-family: Montserrat, sans-serif;
                                font-size: 16px;
                                line-height: 22.4px;
                              "
                              >${element.dataValues.precio}</span
                            ></strong
                          >
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div`
    )
  });
  let templateCode = productsToTemplate.join(' ')

  let itemMailFrame = `<div
  class="u-row-container"
  style="padding: 0px; background-color: transparent"
>
  <div
    class="u-row"
    style="
      margin: 0 auto;
      min-width: 320px;
      max-width: 500px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      background-color: transparent;
    "
  >
   ${templateCode}
  </div>
</div>`
  let htmlClient = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>

    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-22p53 {
    width: 112.65px !important;
  }

  .u-row .u-col-22p74 {
    width: 113.7px !important;
  }

  .u-row .u-col-23p13 {
    width: 115.65px !important;
  }

  .u-row .u-col-23p14 {
    width: 115.7px !important;
  }

  .u-row .u-col-33p33 {
    width: 166.65px !important;
  }

  .u-row .u-col-50 {
    width: 250px !important;
  }

  .u-row .u-col-54p13 {
    width: 270.65px !important;
  }

  .u-row .u-col-54p33 {
    width: 271.65px !important;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>



<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/tudor-retailer.jpg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 58%;max-width: 85.07px;" width="85.07"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/mimi-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 146.67px;" width="146.67"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/rolex-retailer.webp" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 58%;max-width: 85.07px;" width="85.07"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong style="line-height: inherit; color: #000000; font-family: Montserrat, sans-serif; font-size: 18px; text-align: center; white-space: normal; background-color: #f7fbfc;"><span style="line-height: 25.2px; font-size: 18px;">Gracias por su compra!</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Hola Sr(a) ${parsedBillData.owner.dataValues.name} ${parsedBillData.owner.dataValues.lastName}, tu orden ha sido procesada correctamente, para continuar con el proceso de compra y retirar tu producto, debes comunicarte con cualquiera de nuestros canales de atención, utilizando este número de orden</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h2 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 23px; font-weight: 400;"><span><span><span><span><span><span><span><span><span><span><span><span>${req.params.codigo}</span></span></span></span></span></span></span></span></span></span></span></span></h2>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">

<div align="center">
  <div style="display: table; max-width:73px;">
  <!--[if (mso)|(IE)]><table width="73" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:73px;"><tr><![endif]-->


    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://wa.me/584122356464" title="WhatsApp" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-1.png" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->

    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="mailto:info@mimijoyeria.com" title="Email" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-4.png" alt="Email" title="Email" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->


    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;">A continuacion, se anexan todos los datos del cliente y la compra</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="250" style="background-color: #f7fbfc;width: 250px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"><strong>Información de cliente</strong> </span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.name} ${parsedBillData.owner.dataValues.lastName}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.email}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.phone}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.direccion}</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="250" style="background-color: #f7fbfc;width: 250px;padding: 0px 0px 29px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px 0px 29px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Montserrat, sans-serif; font-size: 16px; line-height: 22.4px;">Descripción de pedido</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>




  <!-- ##################-->
  <!-- CONTENT -->
  <div
class="u-row-container"
style="padding: 0px; background-color: transparent"
>
<div
  class="u-row"
  style="
    margin: 0 auto;
    min-width: 320px;
    max-width: 500px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    background-color: transparent;
  "
>
${itemMailFrame}

</div>
</div>
  <!-- ENDCONTENT -->
  <!-- ##################-->




<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="270" style="background-color: #ffffff;width: 270px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-54p13" style="max-width: 320px;min-width: 270.65px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="115" style="background-color: #ffffff;width: 115px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-23p13" style="max-width: 320px;min-width: 115.65px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;">Total</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="113" style="background-color: #ffffff;width: 113px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-22p74" style="max-width: 320px;min-width: 113.7px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="font-family: Montserrat, sans-serif; line-height: 22.4px; font-size: 16px;">$${parsedBillData.total}</span></strong></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">Este es un mensaje autogenerado, por favor no responder</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">Si deseas responder al cliente, utiliza la información suministrada en este correo.</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">La información suministrada en este correo, es estrictamente confidencial y su uso indebido, puede generar sanciones legales.</span></p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="line-height: 140%;">C.C Tólon Fashion Mall Piso 1. Las Mercedes, 1080 Caracas.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">

<div align="center">
  <div style="display: table; max-width:73px;">
  <!--[if (mso)|(IE)]><table width="73" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:73px;"><tr><![endif]-->


    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://www.instagram.com/mimijoyeria/" title="Instagram" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-3.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->

    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://wa.me/584122356464" title="WhatsApp" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-1.png" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->


    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`

  let htmlAdmin = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>

    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-22p53 {
    width: 112.65px !important;
  }

  .u-row .u-col-22p74 {
    width: 113.7px !important;
  }

  .u-row .u-col-23p13 {
    width: 115.65px !important;
  }

  .u-row .u-col-23p14 {
    width: 115.7px !important;
  }

  .u-row .u-col-33p33 {
    width: 166.65px !important;
  }

  .u-row .u-col-50 {
    width: 250px !important;
  }

  .u-row .u-col-54p13 {
    width: 270.65px !important;
  }

  .u-row .u-col-54p33 {
    width: 271.65px !important;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>



<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/tudor-retailer.jpg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 58%;max-width: 85.07px;" width="85.07"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/mimi-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 146.67px;" width="146.67"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">

      <img align="center" border="0" src="https://www.mimijoyeria.com/assets/rolex-retailer.webp" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 58%;max-width: 85.07px;" width="85.07"/>

    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong style="line-height: inherit; color: #000000; font-family: Montserrat, sans-serif; font-size: 18px; text-align: center; white-space: normal; background-color: #f7fbfc;"><span style="line-height: 25.2px; font-size: 18px;">Nueva Compra</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Se ha registrado una nueva compra, mediante el sitio web de Mimi Joyería, registrada mediante el siguiente código:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h2 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 23px; font-weight: 400;"><span><span><span><span><span><span><span><span><span><span><span><span>${req.params.codigo}</span></span></span></span></span></span></span></span></span></span></span></span></h2>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">

<div align="center">
  <div style="display: table; max-width:73px;">
  <!--[if (mso)|(IE)]><table width="73" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:73px;"><tr><![endif]-->


    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://wa.me/584122356464" title="WhatsApp" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-1.png" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->

    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="mailto:info@mimijoyeria.com" title="Email" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-1.png" alt="Email" title="Email" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->


    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;">A continuacion, se anexan todos los datos del cliente y la compra</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="250" style="background-color: #f7fbfc;width: 250px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"><strong>Información de cliente</strong> </span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.name} ${parsedBillData.owner.dataValues.lastName}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.email}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.owner.dataValues.phone}</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;"> - ${parsedBillData.direccion}</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="250" style="background-color: #f7fbfc;width: 250px;padding: 0px 0px 29px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px 0px 29px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Montserrat, sans-serif; font-size: 16px; line-height: 22.4px;">Descripción de pedido</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>




  <!-- ##################-->
  <!-- CONTENT -->
  <div
class="u-row-container"
style="padding: 0px; background-color: transparent"
>
<div
  class="u-row"
  style="
    margin: 0 auto;
    min-width: 320px;
    max-width: 500px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    background-color: transparent;
  "
>
${itemMailFrame}

</div>
</div>
  <!-- ENDCONTENT -->
  <!-- ##################-->




<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #e7e7e7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="270" style="background-color: #ffffff;width: 270px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-54p13" style="max-width: 320px;min-width: 270.65px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="115" style="background-color: #ffffff;width: 115px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-23p13" style="max-width: 320px;min-width: 115.65px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;">Total</span></strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="113" style="background-color: #ffffff;width: 113px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-22p74" style="max-width: 320px;min-width: 113.7px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 11px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="font-family: Montserrat, sans-serif; line-height: 22.4px; font-size: 16px;">$${parsedBillData.total}</span></strong></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f7fbfc;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f7fbfc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">Este es un mensaje autogenerado, por favor no responder</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">Si deseas responder al cliente, utiliza la información suministrada en este correo.</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-family: Montserrat, sans-serif; line-height: 19.6px;">La información suministrada en este correo, es estrictamente confidencial y su uso indebido, puede generar sanciones legales.</span></p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="line-height: 140%;">C.C Tólon Fashion Mall Piso 1. Las Mercedes, 1080 Caracas.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">

<div align="center">
  <div style="display: table; max-width:73px;">
  <!--[if (mso)|(IE)]><table width="73" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:73px;"><tr><![endif]-->


    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://www.instagram.com/mimijoyeria/" title="Instagram" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-3.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->

    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://wa.me/584122356464" title="WhatsApp" target="_blank">
          <img src="https://www.mimijoyeria.com/storage/mail-assets/image-1.png" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->


    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`

  const mailToClient = {
    from: 'pagosweb@mimijoyeria.com',
    to: parsedBillData.owner.dataValues.email,
    subject: `Detalles de pago - Mimi Joyería`,
    html: htmlClient

  }
  const mailToAdmin = {
    from: 'pagosweb@mimijoyeria.com',
    to: 'manuelzorrilladev@gmail.com',
    subject: `Detalles de pago - Mimi Joyería`,
    html: htmlAdmin

  }

  transport.sendMail(mailToClient, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      transport.sendMail(mailToAdmin, function (error, info) {
        if (error) {
          res.status(500).json({

            message:
              error.message || "Some error occurred sending de email."

          });
        } else {
          res.status(200).send({
            'status':'AUTHORIZED',
            'code': req.params.codigo
          })

        }
      })

    }
  })




}


