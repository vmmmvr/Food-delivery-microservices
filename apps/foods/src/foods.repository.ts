import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { Food } from "./schemas/foods.schema";

@Injectable()
export class FoodsRepository extends AbstractRepository<Food> {
    protected logger: Logger = new Logger(Food.name);


    constructor(

        @InjectModel(Food.name) FoodModel: Model<Food>,
        @InjectConnection() connection: Connection
    ) {
        super(FoodModel, connection)
    }
}