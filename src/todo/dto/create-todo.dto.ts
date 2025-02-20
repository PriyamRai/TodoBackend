import { IsBoolean, IsNotEmpty, IsString ,Validate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {IsStrongPasswordConstraint} from '../validatorcustom.js'

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of the todo item',
    example: 'Buy groceries'
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The status of todo',
    example: 'completed'
  })
  @IsNotEmpty()
  @IsBoolean()
  isCompleted: boolean;
  
  @ApiProperty({
    description: 'Password',
    example: 'axcv123LLaP'
  })
  @Validate(IsStrongPasswordConstraint, [{ minLength: 10 }])
  password:string ;
}





