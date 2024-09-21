import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  readonly orderId: string;

  readonly userId: string;
}
