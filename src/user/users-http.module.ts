import { Module } from "@nestjs/common";
import { UsersModule } from "./users.module";
import { UserService } from "../Services/user.service";
import { UserController } from "../Controllers/usuario.controller";

@Module({
    imports: [UsersModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserHttpModule {}