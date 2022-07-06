import { UseGuards } from '@nestjs/common';
import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { TagDto } from './dto/tag.dto';
import { Taggable } from './dto/taggable.interface';
import { TagService } from './tag.service';

type Info = { parentType: { name: string } };

@Resolver(() => Taggable)
export class TaggableInterfaceResolver {
    public constructor(private readonly tagService: TagService) {}

    @ResolveField(() => [TagDto], { name: 'tags' })
    @UseGuards(AuthenticatedGuard)
    public getAppliedTags(
        @Parent() taggable: Taggable
        // @Info() { parentType }: Info
    ): Promise<TagDto[]> {
        return this.tagService.getByIds(taggable.tagIds);
    }
}
