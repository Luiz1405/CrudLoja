import { UserEntity } from "src/Entities/user.entity";
import { InterfaceUserRepository } from "./Contracts/interface.user.repository";


export class UserRepository implements InterfaceUserRepository {
    createUser(user: UserEntity): void | Promise<void> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    remove(userId: number): Promise<{ success: boolean; message?: string; }> {
        throw new Error("Method not implemented.");
    }
    updateUser(userId: number, newData: UserEntity): Promise<{ success: boolean; message?: string; }> {
        throw new Error("Method not implemented.");
    }

}