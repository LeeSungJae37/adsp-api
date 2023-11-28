import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { show_yn } from './show-yn.enum';

@InputType()
export class NestedEnumshow_ynFilter {

    @Field(() => show_yn, {nullable:true})
    equals?: keyof typeof show_yn;

    @Field(() => [show_yn], {nullable:true})
    in?: Array<keyof typeof show_yn>;

    @Field(() => [show_yn], {nullable:true})
    notIn?: Array<keyof typeof show_yn>;

    @Field(() => NestedEnumshow_ynFilter, {nullable:true})
    not?: NestedEnumshow_ynFilter;
}
