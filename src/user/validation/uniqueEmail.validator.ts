import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/Services/user.service";

@Injectable()
@ValidatorConstraint({ async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
        const userWithExistentEmail = await this.userService.emailAlreadyExists(value);

        return !userWithExistentEmail;
    }

}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, propertie: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertie,
            options: validationOptions,
            constraints: [],
            validator: UniqueEmailValidator
        });
    }
}