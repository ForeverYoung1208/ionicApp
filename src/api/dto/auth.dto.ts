import { IsString } from 'class-validator';
import { ApiProperty } from './mock-nest/decorators';

export class AuthDto {
  @ApiProperty({ example: 'admin@test.com' })
  @IsString()
  email!: string;

  @ApiProperty({ example: 'asdfasdf' })
  @IsString()
  password!: string;
}
