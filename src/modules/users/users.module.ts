import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User';
import { ValidateUserMiddleware } from './middlewares/validate-user.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(ValidateUserMiddleware)
    //   .forRoutes({
    //     path: 'users',
    //     method: RequestMethod.GET,
    //   });
    //for all routes
    consumer.apply(ValidateUserMiddleware).forRoutes(UsersController);
    //multiple middlewares
    // consumer.apply(ValidateUserMiddleware, ValidateUserMiddleware2).forRoutes(UsersController);
  }
}
