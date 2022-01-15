import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './models/profile.entity';
import { User } from './models/user.entity';
import { UserRepo } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile])],
    providers: [UserResolver, UserService, UserRepo],
    exports: [UserService, UserRepo],
})
export class UserModule {}
