import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/Entities/user.entity";
import { CreateUserDto } from "src/user/dto/createUser.dto";
import { UpdateUserDTO } from "src/user/dto/updateUser.dto";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async findAllUsers(): Promise<UserEntity[]> {
        const users = await this.userRepository.find();

        return users;
    }

    async update(userId: number, updateData: UpdateUserDTO): Promise<UserEntity> {
        const user = await this.userRepository.preload({
            ...updateData,
            id: userId,
        });

        if(!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        };

        return await this.userRepository.save(user);
    }

    async createUser(userDto: CreateUserDto): Promise<UserEntity> {
        const newUser = this.userRepository.create(userDto);

        return await this.userRepository.save(newUser);
    }

    async deleteUser(userId: number): Promise<void> {
        const result = await this.userRepository.delete(userId);

        if(result.affected === 0 ) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
    }
}