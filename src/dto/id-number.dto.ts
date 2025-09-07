import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty } from '../api/dto/mock-nest/decorators';

export class IdNumberDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @Expose()
  @ApiProperty({ example: 1 })
  id!: number;
}
