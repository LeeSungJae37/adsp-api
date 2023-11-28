import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    img_url?: true;

    @Field(() => Boolean, {nullable:true})
    item_title?: true;

    @Field(() => Boolean, {nullable:true})
    keywords?: true;

    @Field(() => Boolean, {nullable:true})
    bid?: true;

    @Field(() => Boolean, {nullable:true})
    use_yn?: true;

    @Field(() => Boolean, {nullable:true})
    ins_date?: true;

    @Field(() => Boolean, {nullable:true})
    upd_date?: true;

    @Field(() => Boolean, {nullable:true})
    del_yn?: true;
}
