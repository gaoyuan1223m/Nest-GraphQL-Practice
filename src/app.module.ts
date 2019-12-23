import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ItemsModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot('mongodb://localhost:27017/nestgraphql')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
