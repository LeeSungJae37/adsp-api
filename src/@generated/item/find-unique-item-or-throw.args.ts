import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueItemOrThrowArgs {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'item_id'>;
}
