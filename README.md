# PRODUCT MICROSERVICES (NestJS, Prisma and SQLite)

## Setup

Pasos para levantar el microservicio: `products-ms`

1. Clonar el repositorio.
2. Crear y agregar las variables de entorno en `.env` basado en `.env.example`.
3. Instalar las dependencias `npm install`.
4. Generar los archivos de migración `npx prisma migrate dev`.
5. Ejecutar en modo development y watch `npm run start:dev`.

## NestJS

NestJS es un framework progresivo para desarrollar aplicaciones backend escalables usando Node.js y TypeSript.

### Microservices

Los microservicios en NestJS son una forma de construir aplaciones dividiendo el sistema en múltiples servicios pequeños, independientes y especializados que se comunican entre sí.

## Prisma

Prisma es un ORM (Object Relational Mapper) moderno para Node.js y TypeScript que facilita trabajar con bases de datos de manera segura, rápida y elegante.

## SQLite

SQLite es un sistema de gestión de bases de datos relacional, ligero y embebido que almacena toda la base de datos en un solo archivo.
