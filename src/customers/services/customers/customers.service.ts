import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
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
    return this.users.find(item => item.id == id)
  }
}
