import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../Entities/User/user.entity";
import { UserService } from "../Services/User/user.service";
import { UserController } from "../Controllers/User/usuario.controller";
import { UniqueEmailValidator } from "./validation/uniqueEmail.validator";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UniqueEmailValidator],
    controllers: [UserController],
})
export class UsersModule {}