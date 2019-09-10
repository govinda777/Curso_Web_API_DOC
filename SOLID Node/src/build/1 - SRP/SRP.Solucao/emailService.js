"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require('nodemailer').nodemailer;
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.enviar = function (from, to, subject, text) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youremail@gmail.com',
                pass: 'yourpassword'
            }
        });
        var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    };
    EmailService.prototype.isValid = function (email) {
        return !email.includes("@") ? false : true;
    };
    return EmailService;
}());
exports.EmailService = EmailService;
