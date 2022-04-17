import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { Tag } from './models/tag.entity';
import { Taggable } from './models/taggable.entity';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tag, Taggable]), CaslModule],
    providers: [TagService, TagResolver, CaslAbilityFactory],
    exports: [TagService],
})
export class TagModule {}
