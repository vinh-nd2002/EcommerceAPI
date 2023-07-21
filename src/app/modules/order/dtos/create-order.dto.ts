import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
  phone: string;
  paymentMethod: string;
  address: string;
  products: string[];
  status: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  city: string;
  country: string;
  postalCode: string;
  cvc: number;
  expYear: number;
  expMonth: number;
  cardNumber: string;
}
