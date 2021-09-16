import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../user/models/profile.entity';
import { UserModule } from '../user/user.module';
import { UserRepo } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthSerializer } from './providers/local.serializer';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        PassportModule.register({ session: true, defaultStrategy: 'local' }),
        UserModule,
        TypeOrmModule.forFeature([Profile]),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        LocalAuthSerializer,
        ConfigService,
        UserService,
        UserRepo,
    ],
    exports: [AuthService],
})
export class AuthModule {}
