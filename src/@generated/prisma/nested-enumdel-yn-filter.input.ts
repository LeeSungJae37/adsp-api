import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { del_yn } from './del-yn.enum';

@InputType()
export class NestedEnumdel_ynFilter {

    @Field(() => del_yn, {nullable:true})
    equals?: keyof typeof del_yn;

    @Field(() => [del_yn], {nullable:true})
    in?: Array<keyof typeof del_yn>;

    @Field(() => [del_yn], {nullable:true})
    notIn?: Array<keyof typeof del_yn>;

    @Field(() => NestedEnumdel_ynFilter, {nullable:true})
    not?: NestedEnumdel_ynFilter;
}
