import { ApiProperty } from './mock-nest/decorators';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ResponseTokenDto {
  @ApiProperty()
  @IsString()
  @Expose()
  accessToken!: string;

  @ApiProperty()
  @IsString()
  @Expose()
  refreshToken!: string;
}
