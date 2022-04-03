import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {

  constructor(private customersService: CustomersService) {
  }

  @Get(':id')
  getCustomer(@Param('id') id: number, @Req() req: Request, @Res() res: Response){
    const customer = this.customersService.find(id);
    if (customer){
      res.send(customer)
    }else{
      res.status(404).send({message : "not found"})
    }
  }

}
