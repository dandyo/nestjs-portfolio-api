import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from 'src/dto/posts/create-post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        const res = this.postsService.createPost(createPostDto)
        return res;
    }

    @Get()
    async findAll() {
        const posts = await this.postsService.getPosts();

        return posts;
    }
}
