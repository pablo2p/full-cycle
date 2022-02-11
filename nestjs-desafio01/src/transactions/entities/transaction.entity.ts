import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  @Generated('uuid')
  Account_id: string;

  @Column()
  Amount: number;

  @CreateDateColumn()
  Created_at: number;

  @CreateDateColumn()
  Updated_at: number;
}
