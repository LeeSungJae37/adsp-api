import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from '../@generated/item/item.model';
import { ItemCreateManyInput } from '../@generated/item/item-create-many.input';
import { ItemUncheckedUpdateInput } from '../@generated/item/item-unchecked-update.input';
import { ItemUpdateInput } from '../@generated/item/item-update.input';
import { ItemUncheckedUpdateManyInput } from '../@generated/item/item-unchecked-update-many.input';
import { ItemWhereUniqueInput } from '../@generated/item/item-where-unique.input';
import { ItemCreateInput } from '../@generated/item/item-create.input';
import { UpsertOneItemArgs } from '../@generated/item/upsert-one-item.args';
import { DeleteOneItemArgs } from '../@generated/item/delete-one-item.args';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  //[Item] 리스트 반환
  @Query(() => [Item], {
    name: 'item_list',
    description: '광고 아이템 리스트',
  })
  findAll() {
    // const data = await this.itemService.findMany();
    return this.itemService.findAll();
  }

  @Mutation(() => Item)
  addItem(@Args('Item') item: ItemCreateManyInput) {
    return this.itemService.addItem(item);
  }

  @Mutation(() => Item)
  changeUseYn(@Args('Item') item: ItemCreateManyInput) {
    return this.itemService.changeUseYn(item);
  }

  @Mutation(() => Item)
  deleteItem(@Args('Item') item: ItemWhereUniqueInput) {
    return this.itemService.deleteItem(item);
  }
}
