import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { JournalEntry } from './models/journal-entry.entity';
import { Journal } from './models/journal.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Journal, JournalEntry]), UserModule],
    providers: [],
    exports: [],
})
export class JournalModule {}
