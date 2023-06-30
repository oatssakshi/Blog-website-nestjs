import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "src/post/entities/post.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Post, (post) => post.user, { cascade: true })
    posts: Post[];
}

