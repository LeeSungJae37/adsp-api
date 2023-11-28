import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { show_yn } from '../prisma/show-yn.enum';
import { GraphQLDateTime } from 'graphql-scalars';
import { del_yn } from '../prisma/del-yn.enum';

@ObjectType()
export class Item {

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint;

    @Field(() => String, {nullable:false})
    img_url!: string;

    @Field(() => String, {nullable:false})
    item_title!: string;

    @Field(() => String, {nullable:false})
    keywords!: string;

    @Field(() => Int, {nullable:false,defaultValue:50})
    bid!: number;

    @Field(() => show_yn, {nullable:false,defaultValue:'Y'})
    use_yn!: keyof typeof show_yn;

    @Field(() => GraphQLDateTime, {nullable:false})
    ins_date!: Date;

    @Field(() => GraphQLDateTime, {nullable:false})
    upd_date!: Date;

    @Field(() => del_yn, {nullable:false,defaultValue:'N'})
    del_yn!: keyof typeof del_yn;
}
