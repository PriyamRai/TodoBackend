import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  isCompleted: boolean;

  
 // example use of custom validator
  @Prop({ required: true })
  password: string;
}

export type TodoDocument = Todo & Document;//ensures that documents fetched from the database conform to the schema and also provides mongoose methods
export const TodoSchema = SchemaFactory.createForClass(Todo);
//The above line converts the Todo class into a Mongoose schema that can be used to interact with the MongoDB collection .