import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { show_yn } from './show-yn.enum';
import { NestedEnumshow_ynWithAggregatesFilter } from './nested-enumshow-yn-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumshow_ynFilter } from './nested-enumshow-yn-filter.input';

@InputType()
export class Enumshow_ynWithAggregatesFilter {

    @Field(() => show_yn, {nullable:true})
    equals?: keyof typeof show_yn;

    @Field(() => [show_yn], {nullable:true})
    in?: Array<keyof typeof show_yn>;

    @Field(() => [show_yn], {nullable:true})
    notIn?: Array<keyof typeof show_yn>;

    @Field(() => NestedEnumshow_ynWithAggregatesFilter, {nullable:true})
    not?: NestedEnumshow_ynWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumshow_ynFilter, {nullable:true})
    _min?: NestedEnumshow_ynFilter;

    @Field(() => NestedEnumshow_ynFilter, {nullable:true})
    _max?: NestedEnumshow_ynFilter;
}
