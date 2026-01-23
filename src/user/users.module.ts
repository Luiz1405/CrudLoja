import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../Entities/user.entity";
import { UserService } from "../Services/user.service";
import { UserController } from "../Controllers/usuario.controller";
import { UserRepository } from "../Repositories/user.repository";
import { UniqueEmailValidator } from "./validation/uniqueEmail.validator";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserRepository, UniqueEmailValidator],
    controllers: [UserController],
})
export class UsersModule {}