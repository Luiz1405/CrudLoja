import { promises } from "dns";
import { UserEntity } from "src/Entities/user.entity";

export interface InterfaceUserRepository {
    createUser(user: UserEntity): void | Promise<void>;
    findAll(): Promise<UserEntity[]>;
    remove(userId: number): Promise<{success: boolean, message?: string}>;
    updateUser(userId: number, newData: UserEntity): Promise<{success: boolean, message?: string}>;
}