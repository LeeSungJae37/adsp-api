import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemSumAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    item_id?: bigint | number;

    @Field(() => Int, {nullable:true})
    bid?: number;
}
