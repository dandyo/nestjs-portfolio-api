import { Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users/create-user';
import { User } from 'src/models/User';
import { Repository } from 'typeorm';
import { SerializedUser } from './types';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    createUser(userDetails: CreateUserDto) {
        const newUser = this.userRepository.create({
            ...userDetails,
            datecreated: new Date(),
        })

        return this.userRepository.save(newUser)
    }

    async findAll() {
        const users = await this.userRepository.find();
        return users.map((user) => new SerializedUser(user));
        // return users;
    }

    async getUserById(id: number) {
        // return this.users.find((user) => user)
        const user = await this.userRepository.findOneBy({ id });
        // return new SerializedUser(user);
        return user;
    }

    getUsers() {
        // return this.userRepository.map
    }

    getUserByUsername(username: string) {
        // return this.users.find((user) => user)
        return [];
    }
}
