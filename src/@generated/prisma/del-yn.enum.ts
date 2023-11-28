import { registerEnumType } from '@nestjs/graphql';

export enum del_yn {
    Y = "Y",
    N = "N"
}


registerEnumType(del_yn, { name: 'del_yn', description: undefined })
