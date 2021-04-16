import nodemailer from 'nodemailer';
import type MimeNode from 'nodemailer/lib/mime-node';

const sendEmail = async (
    to: string,
    subject: string,
    html: string
): Promise<void> => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ally.kuphal@ethereal.email',
            pass: 'cyDXm6CJgKsDYZKbgZ',
        },
    });

    // send mail with defined transport object
    const info = (await transporter.sendMail({
        from: '"Ally Kuphal" <ally.kuphal@ethereal.email>', // sender address
        to,
        subject, // Subject line
        //text,
        html, // html body
    })) as {
        envelope: MimeNode.Envelope;
        messageId: string;
    };

    if (typeof info !== 'object' || info == null || !('messageId' in info)) {
        throw new Error('Invalid mail info object.');
    }

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export default sendEmail;
