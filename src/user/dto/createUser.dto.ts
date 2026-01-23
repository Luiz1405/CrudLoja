import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/uniqueEmail.validator";

export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Already exist user with this email'})
    email: string;

    @MinLength(6)
    password: string;
}