import { Exclude, plainToInstance } from "class-transformer";

// plainToInstance

export class User {
    id: number;
    username: StorageManager;
    @Exclude()
    password: string;
    datecreated: Date;
    authStrategy: string;
}