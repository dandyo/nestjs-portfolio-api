import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/users/create-user';
import { UsersInterceptor } from './users.interceptor';
import { SerializedUser } from './types';
import { UserNotFoundException } from './exceptions/UserNotFound.exceptions';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    // @UseInterceptors(UsersInterceptor)
    @UseInterceptors(ClassSerializerInterceptor)
    async findAll() {
        // const users = await this.usersService.findAll();
        return await this.usersService.findAll();
    }

    @Post('create')
    createCustomer() {
        return 'create'
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('id/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.getUserById(id);
        if (user) return user;
        else throw new UserNotFoundException();
        // else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get('/:username')
    // getByUsername(@Param('username') username: string) {
    //     const user = this.usersService.getUserByUsername(username);

    //     if (user) return new SerializedUser(user);
    //     else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    // }
}
