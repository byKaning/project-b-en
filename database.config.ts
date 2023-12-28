// database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql', // ปรับตามประเภทของฐานข้อมูลที่ใช้
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // ในสภาพการพัฒนาเท่านั้น
};
