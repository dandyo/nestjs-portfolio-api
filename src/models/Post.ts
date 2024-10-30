import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ 'name': 'posts' })
export class Post {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    content: string;

    @Column()
    datecreated: Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;
}