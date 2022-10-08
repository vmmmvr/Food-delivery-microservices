import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { Product } from "./schemas/products.schema";

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
    protected logger: Logger = new Logger(Product.name);


    constructor(

        @InjectModel(Product.name) ProductModel: Model<Product>,
        @InjectConnection() connection: Connection
    ) {
        super(ProductModel, connection)
    }
}