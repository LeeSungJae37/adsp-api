import { registerEnumType } from '@nestjs/graphql';

export enum show_yn {
    Y = "Y",
    N = "N"
}


registerEnumType(show_yn, { name: 'show_yn', description: undefined })
