import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { stringify } from 'querystring';
import { AuthService } from '../../auth.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
    public constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService
    ) {
        super({
            authorizationURL: `${String(
                configService.get<string>('auth.discord.authUrl')
            )}?${stringify({
                client_id: configService.get<string>('auth.discord.clientId'),
                redirect_uri: configService.get<string>(
                    'auth.discord.callbackUrl'
                ),
                response_type: 'code',
                scope: 'identify',
            })}`,
            tokenURL: configService.get<string>('auth.discord.tokenUrl'),
            scope: 'identify',
            clientID: configService.get<string>('auth.discord.clientId'),
            clientSecret: configService.get<string>(
                'auth.discord.clientSecret'
            ),
            callbackURL: configService.get<string>('auth.discord.callbackUrl'),
        });
    }

    // public async validate(accessToken: string): Promise<any> {
    //     const data = await this.
    //         .get('https://discordapp.com/api/users/@me', {
    //             headers: { Authorization: `Bearer ${accessToken}` },
    //         })
    //         .toPromise();

    //     return null; // this.authService.findUserFromDiscordId(data.id);
    // }
}
