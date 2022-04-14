import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { Profile } from './models/profile.entity';
import { User } from './models/user.entity';
import { UserRepo } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile]), CaslModule],
    providers: [UserResolver, UserService, UserRepo, CaslAbilityFactory],
    exports: [UserService, UserRepo],
})
export class UserModule {}
