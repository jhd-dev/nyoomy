import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
import { LoggerService } from '../logger/logger.service';
import type { Transporter } from 'nodemailer';
import type MimeNode from 'nodemailer/lib/mime-node';

interface TransporterInfo {
    envelope: MimeNode.Envelope;
    messageId: string;
}

@Injectable()
export class EmailService {
    public constructor(
        private readonly configService: ConfigService,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(EmailService.name);
    }

    public async sendEmail(
        to: string,
        subject: string,
        html: string
    ): Promise<void> {
        const tpHost = this.configService.get<string>('emailTransporter.host');
        const tpPort = this.configService.get<number>('emailTransporter.port');
        const tpName = this.configService.get<string>('emailTransporter.name');
        const tpAddress = this.configService.get<string>(
            'emailTransporter.address'
        );
        const tpPassword = this.configService.get<string>(
            'emailTransporter.password'
        );

        // create reusable transporter object using the default SMTP transport
        const transporter: Transporter = nodemailer.createTransport({
            host: tpHost,
            port: tpPort,
            auth: {
                user: tpAddress,
                pass: tpPassword,
            },
        });

        // send mail with defined transport object
        const info: TransporterInfo = (await transporter.sendMail({
            from: `"${tpName}" <${tpAddress}>`,
            to,
            subject,
            // text,
            html,
        })) as TransporterInfo;

        if (
            typeof info !== 'object' ||
            info == null ||
            !('messageId' in info)
        ) {
            throw new Error('Invalid mail info object.');
        }

        this.logger.log('Message sent: %s', info.messageId);
    }
}
