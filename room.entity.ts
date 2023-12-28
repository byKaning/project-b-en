import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class room{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Number: number;

  @OneToMany(() => User, (user) => user.room)
  users: User[];
}