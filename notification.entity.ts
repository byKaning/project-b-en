import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { ComplaintStatus } from 'src/complainstatus/complainstatus.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  complaint_status_id: number;

  @Column()
  user_id: number;

  @Column()
  complain_id: number;

  @ManyToOne(() => User, (user) => user.complaints)
  user: User;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  
  @JoinColumn()
  complaintStatus: ComplaintStatus;
}