import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    nome: string;

    @IsEmail()
    email: string;
}