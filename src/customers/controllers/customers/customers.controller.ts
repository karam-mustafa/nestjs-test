import { Controller, Get, Param, Req, Request, Res, Response } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';

@Controller('customers')
export class CustomersController {

  constructor(private customersService: CustomersService) {
  }

  @Get(':id')
  getCustomer(@Param('id') id: number, @Req() req: Request, @Res() res: Response){
    return this.customersService.find(id)
  }

}
