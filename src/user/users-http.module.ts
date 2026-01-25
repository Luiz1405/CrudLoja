import { Module } from "@nestjs/common";
import { UsersModule } from "./users.module";
import { UserService } from "../Services/User/user.service";
import { UserController } from "../Controllers/User/usuario.controller";

@Module({
    imports: [UsersModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserHttpModule {}