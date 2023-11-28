import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { del_yn } from './del-yn.enum';
import { NestedEnumdel_ynWithAggregatesFilter } from './nested-enumdel-yn-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumdel_ynFilter } from './nested-enumdel-yn-filter.input';

@InputType()
export class Enumdel_ynWithAggregatesFilter {

    @Field(() => del_yn, {nullable:true})
    equals?: keyof typeof del_yn;

    @Field(() => [del_yn], {nullable:true})
    in?: Array<keyof typeof del_yn>;

    @Field(() => [del_yn], {nullable:true})
    notIn?: Array<keyof typeof del_yn>;

    @Field(() => NestedEnumdel_ynWithAggregatesFilter, {nullable:true})
    not?: NestedEnumdel_ynWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumdel_ynFilter, {nullable:true})
    _min?: NestedEnumdel_ynFilter;

    @Field(() => NestedEnumdel_ynFilter, {nullable:true})
    _max?: NestedEnumdel_ynFilter;
}
