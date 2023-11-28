import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { show_yn } from './show-yn.enum';

@InputType()
export class Enumshow_ynFieldUpdateOperationsInput {

    @Field(() => show_yn, {nullable:true})
    set?: keyof typeof show_yn;
}
