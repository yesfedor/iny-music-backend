import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserGender, UserRole, UserBlocking } from "const/user/enum"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    uid: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    platform: string

    @Column({
        type: 'set',
        enum: UserGender,
    })
    gender: UserGender[]

    @Column()
    birthday: number

    @Column()
    phone: string

    @Column()
    email: string

    @Column({
        type: 'set',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole

    @Column({
        type: 'set',
        enum: UserBlocking
    })
    blocking: UserBlocking[]

    @Column()
    avatar_id: number

    @Column()
    updated_at: number

    @Column()
    created_at: number
}