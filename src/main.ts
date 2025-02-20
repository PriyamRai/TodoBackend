import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors() ;//enable cross origin requests . 
  // app.enableCors({
  //   origin: 'http://localhost:7001', // Your frontend URL
  //   methods: ['GET', 'POST', 'PUT', 'DELETE']
  // });
  // In main.ts or app.module.ts
app.enableCors({
  origin: true, // Allow all origins during development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
});
  const config = new DocumentBuilder().setTitle('Todo API').setDescription('API for managing todos').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(7000);
}

bootstrap();




















