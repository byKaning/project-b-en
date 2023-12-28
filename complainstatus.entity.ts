import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Complaint } from 'src/complaint/complaint.entity';
@Entity()
export class ComplaintStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToMany(() => Complaint, (complaint) => complaint.complaintStatus)
  complaints: Complaint[];
}