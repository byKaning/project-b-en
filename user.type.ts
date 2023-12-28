import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user/user.entity';

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToOne(() => User, (user) => user.userType)
  user: User;
}