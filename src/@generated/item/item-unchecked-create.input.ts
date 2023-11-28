import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { show_yn } from '../prisma/show-yn.enum';
import { GraphQLDateTime } from 'graphql-scalars';
import { del_yn } from '../prisma/del-yn.enum';

@InputType()
export class ItemUncheckedCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    item_id?: bigint | number;

    @Field(() => String, {nullable:false})
    img_url!: string;

    @Field(() => String, {nullable:false})
    item_title!: string;

    @Field(() => String, {nullable:false})
    keywords!: string;

    @Field(() => Int, {nullable:true})
    bid?: number;

    @Field(() => show_yn, {nullable:true})
    use_yn?: keyof typeof show_yn;

    @Field(() => GraphQLDateTime, {nullable:true})
    ins_date?: Date | string;

    @Field(() => GraphQLDateTime, {nullable:true})
    upd_date?: Date | string;

    @Field(() => del_yn, {nullable:true})
    del_yn?: keyof typeof del_yn;
}
