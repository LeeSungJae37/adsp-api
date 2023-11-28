import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';
import { NestedDateTimeWithAggregatesFilter } from './nested-date-time-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeWithAggregatesFilter {

    @Field(() => GraphQLDateTime, {nullable:true})
    equals?: Date | string;

    @Field(() => [GraphQLDateTime], {nullable:true})
    in?: Array<Date> | Array<string>;

    @Field(() => [GraphQLDateTime], {nullable:true})
    notIn?: Array<Date> | Array<string>;

    @Field(() => GraphQLDateTime, {nullable:true})
    lt?: Date | string;

    @Field(() => GraphQLDateTime, {nullable:true})
    lte?: Date | string;

    @Field(() => GraphQLDateTime, {nullable:true})
    gt?: Date | string;

    @Field(() => GraphQLDateTime, {nullable:true})
    gte?: Date | string;

    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: NestedDateTimeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: NestedDateTimeFilter;

    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: NestedDateTimeFilter;
}
