import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { Profile } from './models/profile.entity';
import { UserSettings } from './models/user-settings.entity';
import { User } from './models/user.entity';
import { UserRepo } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Profile, UserSettings]),
        CaslModule,
        EmailModule,
    ],
    providers: [
        UserResolver,
        UserService,
        UserRepo,
        CaslAbilityFactory,
        EmailService,
    ],
    exports: [UserService, UserRepo],
})
export class UserModule {}
