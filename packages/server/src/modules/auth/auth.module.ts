import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { Profile } from '../user/models/profile.entity';
import { UserSettings } from '../user/models/user-settings.entity';
import { User } from '../user/models/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LocalAuthSerializer } from './providers/local.serializer';
import { GoogleStrategy } from './providers/strategies/google.strategy';
import { LocalStrategy } from './providers/strategies/local.strategy';

@Module({
    imports: [
        PassportModule.register({
            session: true,
            defaultStrategy: 'local',
        }),
        UserModule,
        TypeOrmModule.forFeature([User, Profile, UserSettings]),
        CaslModule,
        EmailModule,
        LoggerModule,
    ],
    providers: [
        AuthResolver,
        AuthService,
        LocalStrategy,
        LocalAuthSerializer,
        GoogleStrategy,
        ConfigService,
        UserService,
        CaslAbilityFactory,
        EmailService,
        LoggerService,
    ],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
