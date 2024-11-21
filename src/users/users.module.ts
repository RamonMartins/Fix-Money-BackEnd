// src/users/users.module.ts

import { Module } from '@nestjs/common'; // Importa o decorador Module do NestJS
import { UsersService } from './users.service'; // Importa o serviço UsersService
import { UsersController } from './users.controller'; // Importa o controlador UsersController
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa o TypeOrmModule para usar o TypeORM
import { User } from './user.entity'; // Importa a entidade User

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa o módulo do TypeORM para trabalhar com a entidade User
  controllers: [UsersController], // Define o controlador que gerenciará as rotas
  providers: [UsersService], // Define o serviço que contém a lógica de negócios
  exports: [UsersService], // Expõe o serviço UsersService para ser utilizado em outros módulos
})
export class UsersModule {}
