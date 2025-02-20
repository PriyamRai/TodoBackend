import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

//This DTO class is  to validate and document the data structure used when updating a todo item. 
export class UpdateTodoDto {
  @ApiPropertyOptional({//to add swagger documentation for this field
    description: 'The updated title of the todo item',
    example: 'Buy groceries and milk'
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'The completion status of the todo item',
    example: true
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}