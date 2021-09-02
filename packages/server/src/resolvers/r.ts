/* eslint-disable max-classes-per-file */
// import { Arg, Int, Query, Resolver, ObjectType } from 'type-graphql';
// import type { ClassType } from 'type-graphql';

import { Field, ID, InterfaceType, ObjectType } from 'type-graphql';
import {
    Column,
    Entity,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export function createBaseResolver<T extends ClassType>(
//     suffix: string,
//     objectTypeCls: T
// ) {
//     @Resolver({ isAbstract: true })
//     abstract class BaseResolver {
//         public items: T[] = [];

//         // eslint-disable-next-line type-graphql/wrong-decorator-signature
//         @Query(() => [objectTypeCls], { name: `getAll${suffix}` })
//         public async getAll(
//             @Arg('first', () => Int) first: number
//         ): Promise<T[]> {
//             return this.items.slice(0, first);
//         }
//     }

//     return BaseResolver;
// }

class MetricEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public id: string;

    @Column(() => TaggableEntity)
    @Field(() => TaggableEntity)
    public taggable: TaggableEntity;
}

@Entity()
@ObjectType()
class BoolMetricEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public id: string;

    @Column(() => MetricEntity, { prefix: 'metric' })
    @Field(() => MetricEntity)
    public metric: MetricEntity;

    @Column(() => BoolMetricSettings)
    @Field()
    public idealVal: boolean;
}

@Entity()
class FloatMetricEntity {}

@Entity()
class TagEntity {
    @PrimaryGeneratedColumn()
    public id: string;
}

@InterfaceType()
class TaggableEntity {
    @PrimaryGeneratedColumn()
    public id: string;
}

@Entity('entries')
@InterfaceType()
class Entry {}
