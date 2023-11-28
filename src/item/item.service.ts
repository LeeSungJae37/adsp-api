import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ItemCreateManyInput } from '../@generated/item/item-create-many.input';
import { ItemUncheckedUpdateInput } from '../@generated/item/item-unchecked-update.input';
import { ItemUpdateInput } from '../@generated/item/item-update.input';
import { ItemUncheckedUpdateManyInput } from '../@generated/item/item-unchecked-update-many.input';
import { UpdateManyItemArgs } from '../@generated/item/update-many-item.args';
import { ItemWhereUniqueInput } from '../@generated/item/item-where-unique.input';
import { ItemCreateInput } from '../@generated/item/item-create.input';
import { UpsertOneItemArgs } from '../@generated/item/upsert-one-item.args';
import { DeleteOneItemArgs } from '../@generated/item/delete-one-item.args';
import { FindManyItemArgs } from '../@generated/item/find-many-item.args';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const result = await this.prisma.item.findMany({});
    console.log(result);
    return result;
  }

  async addItem(item: ItemCreateManyInput) {
    return await this.prisma.item.create({
      data: {
        item_title: item.item_title,
        img_url: item.img_url,
        keywords: item.keywords,
        bid: item.bid,
      },
    });
  }

  async changeUseYn(item: ItemCreateManyInput) {
    return await this.prisma.item.update({
      where: { item_id: item.item_id },
      data: { use_yn: item.use_yn },
    });
  }

  async deleteItem(item: ItemWhereUniqueInput) {
    return await this.prisma.item.delete({
      where: { item_id: item.item_id },
    });
  }

  async searchItems(item: FindManyItemArgs) {
    return await this.prisma.item.findMany({
      where: { keywords: item.where.keywords.contains },
    });
  }
}
