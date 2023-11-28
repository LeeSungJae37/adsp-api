import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    bid?: true;
}
