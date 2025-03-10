import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/users/create-user';
import { UsersInterceptor } from './users.interceptor';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    @UseInterceptors(UsersInterceptor)
    async findAll() {
        const users = await this.usersService.findAll();
        return users;
    }
}
