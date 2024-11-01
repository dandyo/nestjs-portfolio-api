import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dto/posts/create-post';
import { Post } from 'src/models/Post';
import { User } from 'src/models/User';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
        // @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    getPosts() {
        return this.postRepository.find({ relations: ['user'] });
    }

    createPost(postDetails: CreatePostDto) {
        const newPost = this.postRepository.create({
            ...postDetails,
            datecreated: new Date(),
        })

        // return this.postRepository.save(newPost)
        const res = this.postRepository.save(newPost);
        return res
    }
}
