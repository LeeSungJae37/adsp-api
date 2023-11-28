import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemCountAggregate {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    img_url!: number;

    @Field(() => Int, {nullable:false})
    item_title!: number;

    @Field(() => Int, {nullable:false})
    keywords!: number;

    @Field(() => Int, {nullable:false})
    bid!: number;

    @Field(() => Int, {nullable:false})
    use_yn!: number;

    @Field(() => Int, {nullable:false})
    ins_date!: number;

    @Field(() => Int, {nullable:false})
    upd_date!: number;

    @Field(() => Int, {nullable:false})
    del_yn!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
