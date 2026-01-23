import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'projeto-loja',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
