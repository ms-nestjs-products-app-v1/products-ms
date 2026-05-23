import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set validations
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades sin decorador de validación
      forbidNonWhitelisted: true, // Genera un exception
    }),
  );
  // Port
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
