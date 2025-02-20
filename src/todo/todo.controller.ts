import {Controller,Get,Post,Put,Delete,Body,Param,HttpStatus} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {ApiTags,ApiOperation,ApiResponse,ApiParam} from '@nestjs/swagger';
import { BadRequestException } from '@nestjs/common';

  @ApiTags('todos')
  @Controller('todos')
  export class TodoController {
    constructor(private  todoService: TodoService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new todo list' })
    @ApiResponse({
      status: HttpStatus.CREATED,
      description: 'The todo has been successfully created.' ,
    })
    create(@Body() createTodoDto: CreateTodoDto) {
      return this.todoService.create(createTodoDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all todos' })
    @ApiResponse({
      status: HttpStatus.OK,
      description: 'Return all todos.',
    })
    findAll() {
      return this.todoService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a todo by id' })
    @ApiParam({ name: 'id', description: 'Todo ID' })
    findOne(@Param('id') id: string) {
      return this.todoService.findOne(id);
    }
  
    // @Put(':id')
    // @ApiOperation({ summary: 'Update a todo' })
    // @ApiParam({ name: 'id', description: 'Todo ID' })
    // update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    //   return this.todoService.update(id, updateTodoDto);
    // }
    @Put(':id')
    @ApiOperation({ summary: 'Update a todo' })
    @ApiParam({ name: 'id', description: 'Todo ID' })
async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
  if (!id) {
    throw new BadRequestException('Invalid ID');
  }
  return this.todoService.update(id, updateTodoDto);
}
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a todo' })
    @ApiParam({ name: 'id', description: 'Todo ID' })
    remove(@Param('id') id: string) {
      console.log('Deleted todo');
      return this.todoService.remove(id);
    }
  }