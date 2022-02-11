import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './entities/transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transaction: Transaction) {
    console.log('entrou aqui');
    return this.transactionsService.create(transaction);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
