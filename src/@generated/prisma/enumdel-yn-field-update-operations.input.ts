import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { del_yn } from './del-yn.enum';

@InputType()
export class Enumdel_ynFieldUpdateOperationsInput {

    @Field(() => del_yn, {nullable:true})
    set?: keyof typeof del_yn;
}
