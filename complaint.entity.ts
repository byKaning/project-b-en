import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user/user.entity';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.complaints)
  user: User;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  
  @JoinColumn()
  complaintStatus: ComplaintStatus;
}