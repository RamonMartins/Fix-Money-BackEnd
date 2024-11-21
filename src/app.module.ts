import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "api-fix-money",
      password: "!56%@672#", 
      database: 'nestjscrud',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
