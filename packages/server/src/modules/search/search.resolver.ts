import { Injectable, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../user/models/user.entity';
import { SearchArgs } from './dto/search.args';
import { SearchResultUnion } from './models/unions/search-result.union';
import { SearchService } from './search.service';

@Resolver(() => SearchResultUnion)
@Injectable()
export class SearchResolver {
    public constructor(private readonly searchService: SearchService) {}

    @Query(() => [SearchResultUnion])
    @UseGuards(AuthenticatedGuard)
    public search(
        @CurrentUser() user: User,
        @Args('input') input: SearchArgs
    ): Promise<Array<typeof SearchResultUnion>> {
        return this.searchService.search(user, input);
    }
}
