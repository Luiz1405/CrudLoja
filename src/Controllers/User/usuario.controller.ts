import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from 'src/Services/User/user.service';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UpdateUserDTO } from 'src/user/dto/updateUser.dto';

@Controller('/users')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    async createUser(@Body() userData: CreateUserDto) {
        return await this.userService.createUser(userData);
        }

    @Get()
    async findAllUser() {
        return await this.userService.findAllUsers();
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) userId: number, @Body() updateData: UpdateUserDTO) {
        const result  = await this.userService.update(userId, updateData);

        return result;
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) userId: number) {
        await this.userService.deleteUser(userId);
    }
}