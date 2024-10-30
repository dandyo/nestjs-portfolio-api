import { CallHandler, ExecutionContext, Get, NestInterceptor } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable, map } from "rxjs";
import { User } from "./user";

export class UsersInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<User[]>): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                map((data) => data.map((user) => plainToInstance(User, user))));


        //remove password in return data
        //map((data) => data.map(({ password, ...user }) => user)));
    }
}