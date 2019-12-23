import { Module } from '@nestjs/common';
import { ItemsResolver } from './resolver/items.resolver';
import { ItemSchema } from './schema/items.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './service/items.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])
  ],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule { }
