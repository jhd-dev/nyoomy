import { Module } from '@nestjs/common';
import { UserRepo } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    providers: [UserResolver, UserService, UserRepo],
    exports: [UserResolver, UserService, UserRepo],
})
export class UserModule {}
