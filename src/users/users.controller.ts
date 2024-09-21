import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return 'User found ' + id;
  }
}
