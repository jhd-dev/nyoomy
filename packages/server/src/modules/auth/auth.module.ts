import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { UserRepo } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthSerializer } from './providers/serialization.provider';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        PassportModule.register({ session: true, defaultStrategy: 'local' }),
        UserModule,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        AuthSerializer,
        UserService,
        UserRepo,
    ],
})
export class AuthModule {}
