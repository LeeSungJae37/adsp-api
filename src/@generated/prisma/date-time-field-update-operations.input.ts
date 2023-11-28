import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';

@InputType()
export class DateTimeFieldUpdateOperationsInput {

    @Field(() => GraphQLDateTime, {nullable:true})
    set?: Date | string;
}
