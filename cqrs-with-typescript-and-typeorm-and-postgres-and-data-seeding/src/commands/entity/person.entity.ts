import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {

    constructor(firstName: string, lastName: string, aliases: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.aliases = aliases;
    }

    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column("text", { nullable: true, array: true })
    aliases: string[]
}
