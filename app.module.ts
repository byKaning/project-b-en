import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Usercontroller } from './user/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory: (configService: ConfigService) => ({

          type : "sqlite",
          host : "localhost",
          port : "3306",
          username : "root",
          database : "project.db",
          entities: [User],
          synchronize: true
          
        }),
       inject : [ConfigService],
      }),

     TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, Usercontroller],
  providers: [AppService , UserService],
})
export class AppModule {}
