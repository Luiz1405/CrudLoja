import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class ListUsersDTO {

    @IsNumber()
    id: number

    @IsNotEmpty()
    name: string;
  
}