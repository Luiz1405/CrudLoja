import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/Services/user.service';

@Controller('/usuarios')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuarios) {
        return dadosDoUsuarios;
        }
    }