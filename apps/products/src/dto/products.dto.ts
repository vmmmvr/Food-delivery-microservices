import { IsString, IsNotEmpty, IsPositive ,IsNumber} from "class-validator";

export class CreateProductDTO  {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsPositive()
    @IsNotEmpty()
    price: number;
    

}