import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { TagService } from '../tag/tag.service';
import { TodoService } from '../todo/todo.service';
import { UserService } from '../user/user.service';
import { SearchResultResourceType } from './models/enums/search-result-resource-type.enum';
import type { Tag } from '../tag/models/tag.entity';
import type { Todo } from '../todo/models/todo.entity';
import type { SafeUser } from '../user/models/safe-user.model';
import type { User } from '../user/models/user.entity';
import type { SearchArgs } from './dto/search.args';
import type { SearchResultUnion } from './models/unions/search-result.union';

@Injectable()
export class SearchService {
    public constructor(
        private readonly todoService: TodoService,
        private readonly tagService: TagService,
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    public async search(
        searcher: User,
        { text: inputText, tagIds, resourceType }: SearchArgs
    ): Promise<Array<typeof SearchResultUnion>> {
        const terms = inputText.trim().split(/\s/g);

        switch (resourceType) {
            case SearchResultResourceType.TODO:
                return this.searchTodos(searcher, terms, tagIds);
            case SearchResultResourceType.TAG:
                return this.searchTags(searcher, terms);
            case SearchResultResourceType.USER:
                return this.searchUsers(searcher, terms);
            default:
                return [
                    ...(await this.searchTodos(searcher, terms, tagIds)),
                    ...(await this.searchTags(searcher, terms)),
                ];
        }
    }

    private async searchTodos(
        user: User,
        terms: string[],
        tagIds: string[]
    ): Promise<Todo[]> {
        const todos = await this.todoService.getUserTodos(user, true);
        const tagFilteredTodos = todos.filter((todo) =>
            tagIds.some((id) => todo.tags.some((tag) => tag.id === id))
        );
        return tagFilteredTodos
            .filter((todo) => terms.some((term) => todo.title.includes(term)))
            .concat(
                tagFilteredTodos.filter((todo) =>
                    terms.some((term) => todo.description.includes(term))
                )
            );
    }

    private async searchTags(user: User, terms: string[]): Promise<Tag[]> {
        const tags = await this.tagService.getUserTags(user.id, true);
        return tags
            .filter((tag) => terms.some((term) => tag.label.includes(term)))
            .concat(
                tags.filter((tag) =>
                    terms.some((term) => tag.description.includes(term))
                )
            );
    }

    private async searchUsers(
        searcher: User,
        terms: string[]
    ): Promise<SafeUser[]> {
        const users = await this.userService.getAll(searcher);
        return users
            .filter((user) =>
                terms.some((term) => user.username.includes(term))
            )
            .map((user) => this.authService.makeUserSafe(user));
    }
}
