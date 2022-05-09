import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { User } from '../user/models/user.entity';
import { Tag } from './models/tag.entity';
import { Taggable } from './models/taggable.entity';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Tag, Taggable, User]),
        CaslModule,
        LoggerModule,
    ],
    providers: [TagService, TagResolver, CaslAbilityFactory, LoggerService],
    exports: [TagService],
})
export class TagModule {}
