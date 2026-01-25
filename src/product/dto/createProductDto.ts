import { IsNumber, IsString } from "class-validator";


export class CreateProductDto {

    @IsNumber()
    userId: number;

    @IsString()
    name: string

    @IsNumber()
    value: number;

    @IsNumber()
    quantity: number;
    
    @IsString()
    description: string;

    @IsString()
    category: string;
}