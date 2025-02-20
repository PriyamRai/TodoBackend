import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import * as dotenv from 'dotenv';
import {IsStrongPasswordConstraint} from './todo/validatorcustom.js'

dotenv.config();

@Module({
  imports: [
    // Import ConfigModule to manage environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes config accessible globally
      envFilePath: '.env', // Point to your .env file
    }),

    // Set up MongooseModule asynchronously using ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        if (!uri) {
          throw new Error('MONGODB_URI is not defined in the environment variables!');
        }
        return { uri };
      },
      
      inject: [ConfigService],
    }),

    TodoModule, // Your Todo module
  ],
})
export class AppModule {}
