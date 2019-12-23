import { Module } from '@nestjs/common';
import { ItemsResolver } from './items.resolver';
import { ItemSchema } from './items.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])
  ],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule { }
