import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  // Configurar como microservicio [TCP] (Segunda Forma)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        // Port
        port: envs.port,
      },
    },
  );
  const logger = new Logger('Bootstrap');
  // Set validations
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades sin decorador de validación
      forbidNonWhitelisted: true, // Genera un exception
    }),
  );

  // Configuar como microservicio hibrido [REST API y TCP] (Primera Forma)
  // await app.startAllMicroservices();

  // Port
  await app.listen();
  logger.log(`Products Microserve running on port ${envs.port}`);
}
bootstrap();
