import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionService: Repository<Transaction>,
  ) {}

  async create(transaction: Transaction): Promise<Transaction> {
    return await this.transactionService.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionService.find();
  }
}
