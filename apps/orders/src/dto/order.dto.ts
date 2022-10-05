import { IsString, IsNotEmpty, IsPositive ,IsNumber} from "class-validator";

export class CreateOrderDTO  {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsPositive()
    @IsNotEmpty()
    price: number;
    
    @IsNumber()
    @IsNotEmpty()
    phoneNumber: number;
}