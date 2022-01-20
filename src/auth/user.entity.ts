import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
//@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    //@Column()
    @Column({name: "username", unique: true})
    username: string;

    @Column()
    password: string;
}