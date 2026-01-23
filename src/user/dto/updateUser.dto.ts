import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/uniqueEmail.validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Already exist user with this email'})
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}