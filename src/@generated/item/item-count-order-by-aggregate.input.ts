import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ItemCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    keywords?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    use_yn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ins_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    upd_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    del_yn?: keyof typeof SortOrder;
}
