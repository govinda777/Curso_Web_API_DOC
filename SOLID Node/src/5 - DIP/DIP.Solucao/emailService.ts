import { IEmailService } from "./Interfaces/iemailService";

const { nodemailer } = require('nodemailer');

class EmailService implements IEmailService {
    
    public enviar(from: string, to: string,subject: string, text: string) {
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

        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    public isValid(email: string) : boolean {
        return !email.includes("@") ? false : true;
    }
}
export { EmailService }