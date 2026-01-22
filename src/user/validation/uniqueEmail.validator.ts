import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/Services/user.service";


export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
        throw new Error("Method not implemented.");
    }

}