import nodemailer from 'nodemailer';
import {
    EMAIL_TRANSPORTER_HOST,
    EMAIL_TRANSPORTER_PORT,
    EMAIL_TRANSPORTER_NAME,
    EMAIL_TRANSPORTER_ADDRESS,
    EMAIL_TRANSPORTER_PASSWORD,
} from '../env';
import type { Transporter } from 'nodemailer';
import type MimeNode from 'nodemailer/lib/mime-node';

interface TransporterInfo {
    envelope: MimeNode.Envelope;
    messageId: string;
}

const sendEmail = async (
    to: string,
    subject: string,
    html: string
): Promise<void> => {
    // create reusable transporter object using the default SMTP transport
    const transporter: Transporter = nodemailer.createTransport({
        host: EMAIL_TRANSPORTER_HOST,
        port: EMAIL_TRANSPORTER_PORT,
        auth: {
            user: EMAIL_TRANSPORTER_ADDRESS,
            pass: EMAIL_TRANSPORTER_PASSWORD,
        },
    });

    // send mail with defined transport object
    const info: TransporterInfo = (await transporter.sendMail({
        from: `"${EMAIL_TRANSPORTER_NAME}" <${EMAIL_TRANSPORTER_ADDRESS}>`,
        to,
        subject,
        // text,
        html,
    })) as TransporterInfo;

    if (typeof info !== 'object' || info == null || !('messageId' in info)) {
        throw new Error('Invalid mail info object.');
    }

    console.log('Message sent: %s', info.messageId);

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export default sendEmail;
