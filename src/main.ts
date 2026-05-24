import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  // Set validations
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades sin decorador de validación
      forbidNonWhitelisted: true, // Genera un exception
    }),
  );
  // Port
  await app.listen(envs.port ?? 3001);
  logger.log(`App running on port ${envs.port}`);
}
bootstrap();
