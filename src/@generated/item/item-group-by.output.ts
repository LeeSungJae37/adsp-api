import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { show_yn } from '../prisma/show-yn.enum';
import { GraphQLDateTime } from 'graphql-scalars';
import { del_yn } from '../prisma/del-yn.enum';
import { ItemCountAggregate } from './item-count-aggregate.output';
import { ItemAvgAggregate } from './item-avg-aggregate.output';
import { ItemSumAggregate } from './item-sum-aggregate.output';
import { ItemMinAggregate } from './item-min-aggregate.output';
import { ItemMaxAggregate } from './item-max-aggregate.output';

@ObjectType()
export class ItemGroupBy {

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint | number;

    @Field(() => String, {nullable:false})
    img_url!: string;

    @Field(() => String, {nullable:false})
    item_title!: string;

    @Field(() => String, {nullable:false})
    keywords!: string;

    @Field(() => Int, {nullable:false})
    bid!: number;

    @Field(() => show_yn, {nullable:false})
    use_yn!: keyof typeof show_yn;

    @Field(() => GraphQLDateTime, {nullable:false})
    ins_date!: Date | string;

    @Field(() => GraphQLDateTime, {nullable:false})
    upd_date!: Date | string;

    @Field(() => del_yn, {nullable:false})
    del_yn!: keyof typeof del_yn;

    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: ItemCountAggregate;

    @Field(() => ItemAvgAggregate, {nullable:true})
    _avg?: ItemAvgAggregate;

    @Field(() => ItemSumAggregate, {nullable:true})
    _sum?: ItemSumAggregate;

    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: ItemMinAggregate;

    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: ItemMaxAggregate;
}
