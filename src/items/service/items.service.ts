import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemType } from '../dto/item.dto';
import { Item } from '../interface/item.interface';
import { ItemInputCreate, ItemInputUpdate } from '../input/items.input';

@Injectable()
export class ItemsService {

    constructor(
        @InjectModel('Item') private itemModel: Model<Item>
    ) { }

    async create(createItemDto: ItemInputCreate): Promise<ItemType> {
        const createdItem = new this.itemModel(createItemDto);
        return await createdItem.save();
    }

    async findAll(): Promise<ItemType[]> {
        return await this.itemModel.find().exec();
    }

    async findOne(id: string): Promise<ItemType> {
        return await this.itemModel.findOne({ _id: id });
    }

    async delete(id: string): Promise<ItemType> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: ItemInputUpdate): Promise<ItemType> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
