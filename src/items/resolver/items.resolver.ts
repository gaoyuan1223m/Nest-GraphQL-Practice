import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from '../service/items.service';
import { ItemType } from '../dto/item.dto';
import { ItemInputCreate, ItemInputUpdate } from '../input/items.input';

@Resolver()
export class ItemsResolver {

    constructor(private readonly itemsService: ItemsService) { }

    @Query(() => [ItemType])
    async items(): Promise<ItemType[]> {
        return this.itemsService.findAll();
    }

    @Query(() => ItemType)
    async item(@Args('id') id: string): Promise<ItemType> {
        return this.itemsService.findOne(id);
    }

    @Mutation(() => ItemType)
    async createItem(@Args('input') input: ItemInputCreate): Promise<ItemType> {
        return this.itemsService.create(input);
    }

    @Mutation(() => ItemType)
    async updateItem(@Args('id') id: string, @Args('input') input: ItemInputUpdate): Promise<ItemType> {
        return this.itemsService.update(id, input);
    }

    @Mutation(() => ItemType)
    async deleteItem(@Args('id') id: string): Promise<ItemType> {
        return this.itemsService.delete(id);
    }

}