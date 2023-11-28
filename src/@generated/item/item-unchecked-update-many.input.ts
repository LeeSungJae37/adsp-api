import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { Enumshow_ynFieldUpdateOperationsInput } from '../prisma/enumshow-yn-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { Enumdel_ynFieldUpdateOperationsInput } from '../prisma/enumdel-yn-field-update-operations.input';

@InputType()
export class ItemUncheckedUpdateManyInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    item_id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img_url?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    item_title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keywords?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    bid?: IntFieldUpdateOperationsInput;

    @Field(() => Enumshow_ynFieldUpdateOperationsInput, {nullable:true})
    use_yn?: Enumshow_ynFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    ins_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    upd_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => Enumdel_ynFieldUpdateOperationsInput, {nullable:true})
    del_yn?: Enumdel_ynFieldUpdateOperationsInput;
}
