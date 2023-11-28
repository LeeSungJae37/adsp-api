import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Enumshow_ynFilter } from '../prisma/enumshow-yn-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Enumdel_ynFilter } from '../prisma/enumdel-yn-filter.input';

@InputType()
export class ItemWhereInput {

    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    item_id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    img_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    item_title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    keywords?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    bid?: IntFilter;

    @Field(() => Enumshow_ynFilter, {nullable:true})
    use_yn?: Enumshow_ynFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ins_date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    upd_date?: DateTimeFilter;

    @Field(() => Enumdel_ynFilter, {nullable:true})
    del_yn?: Enumdel_ynFilter;
}
