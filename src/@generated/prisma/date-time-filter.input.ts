import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeFilter {

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

    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: NestedDateTimeFilter;
}
