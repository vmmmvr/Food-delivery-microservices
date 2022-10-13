import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from "joi";
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { Food, FoodSchema } from './schemas/foods.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        "MONOGODB_URI": Joi.string().required(),
        "PORT": Joi.number().required()
      }),
      envFilePath: "./apps/foods/.env"
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Food.name,
        schema: FoodSchema
      }
    ]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
