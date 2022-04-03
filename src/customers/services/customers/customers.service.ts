import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  find() {
    return {
      email:'karam2mustafa@gmail.com',
      name:'karam mustafa updated',
    }
  }
}
