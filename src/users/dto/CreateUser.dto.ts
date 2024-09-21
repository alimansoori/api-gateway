import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @MaxLength(64)
  displayName?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  password: string;
}
