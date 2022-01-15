import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../user/models/profile.entity';
import { User } from '../user/models/user.entity';
import { UserModule } from '../user/user.module';
import { UserRepo } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LocalAuthSerializer } from './providers/local.serializer';
import { GoogleStrategy } from './providers/strategies/google.strategy';
import { LocalStrategy } from './providers/strategies/local.strategy';

@Module({
    imports: [
        PassportModule.register({ session: true, defaultStrategy: 'local' }),
        UserModule,
        TypeOrmModule.forFeature([User, Profile]),
    ],
    providers: [
        AuthResolver,
        AuthService,
        LocalStrategy,
        LocalAuthSerializer,
        GoogleStrategy,
        ConfigService,
        UserService,
        UserRepo,
    ],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
