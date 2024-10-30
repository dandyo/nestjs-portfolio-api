import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './models/Post';
import { User } from './models/User';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs-portfolio-api',
    entities: [Post, User],
    synchronize: true,
  }), PostsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
