import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    item_id = "item_id",
    img_url = "img_url",
    item_title = "item_title",
    keywords = "keywords",
    bid = "bid",
    use_yn = "use_yn",
    ins_date = "ins_date",
    upd_date = "upd_date",
    del_yn = "del_yn"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
