import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([]), UserModule],
    providers: [],
    exports: [],
})
export class JournalModule {}
