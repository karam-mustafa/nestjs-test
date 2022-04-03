import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/CreateCustomerDto.dto';
import { Customer } from '../../types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id:1,
      email:'karam2mustafa@gmail.com',
      name:'karam mustafa updated',
    },
    {
      id:2,
      email:'karam2mustafa@gmail.com2',
      name:'karam mustafa updated2',
    },
    {
      id:3,
      email:'karam2mustafa@gmail.com3',
      name:'karam mustafa updated3',
    },
  ];
  find(id: number) {
    return this.customers.find(item => item.id == id)
  }

  create(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto)
  }

  get() {
    return this.customers;
  }
}
