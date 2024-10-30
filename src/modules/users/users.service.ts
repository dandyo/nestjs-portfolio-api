import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users/create-user';
import { User } from 'src/models/User';
import { Repository } from 'typeorm';

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

    findAll() {
        return this.userRepository.find();
    }
}
