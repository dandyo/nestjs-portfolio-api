import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { Exclude } from "class-transformer";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    datecreated: Date;

    @Column({ nullable: true })
    authStrategy: string;

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // profile: Profile;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}