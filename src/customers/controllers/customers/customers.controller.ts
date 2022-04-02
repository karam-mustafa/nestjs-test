import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

  @Get('')
  getCustomer(){
    return {
      email:'karam2mustafa@gmail.com',
      name:'karam mustafa',
    }
  }

}
