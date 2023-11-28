import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { Enumshow_ynWithAggregatesFilter } from '../prisma/enumshow-yn-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { Enumdel_ynWithAggregatesFilter } from '../prisma/enumdel-yn-with-aggregates-filter.input';

@InputType()
export class ItemScalarWhereWithAggregatesInput {

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    item_id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    img_url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    item_title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    keywords?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    bid?: IntWithAggregatesFilter;

    @Field(() => Enumshow_ynWithAggregatesFilter, {nullable:true})
    use_yn?: Enumshow_ynWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    ins_date?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    upd_date?: DateTimeWithAggregatesFilter;

    @Field(() => Enumdel_ynWithAggregatesFilter, {nullable:true})
    del_yn?: Enumdel_ynWithAggregatesFilter;
}
