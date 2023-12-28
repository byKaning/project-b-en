import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Complaint } from "src/complaint/complaint.entity";
import { UserType } from "src/usertype/user.type";
import { room } from "src/room/room.entity";

@Entity()
export class User {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_type_id: string;

    @Column()
    room_id: number;

    @Column()
    username: string;

    @Column()
    phonenumber: number;

    @Column()
    password: number;

    @OneToOne(() => UserType, (userType) => userType.user)
    @JoinColumn()
    userType: UserType;
  
    @ManyToOne(() => room, (room) => room.users)
    @JoinColumn()
    roomNumber: room;
  
    @OneToMany(() => Complaint, (complaint) => complaint.user)
    complaints: Complaint[];

}
