import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ItemAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bid?: keyof typeof SortOrder;
}
