import { ArgsType, Field, ID } from '@nestjs/graphql';
import { SearchResultResourceType } from '../models/enums/search-result-resource-type.enum';

@ArgsType()
export class SearchArgs {
    @Field({ defaultValue: '' })
    public text: string;

    @Field(() => [ID], { defaultValue: [] })
    public tagIds: string[];

    @Field(() => SearchResultResourceType, { nullable: true })
    public resourceType?: SearchResultResourceType;
}
