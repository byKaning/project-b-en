import { Module } from '@nestjs/common';
import { UsersModule } from './user.module';
import { UserService } from './user.service';
import { Usercontroller } from './user.controller';

@Module({
  imports: [UsersModule],
  providers: [UserService],
  controllers: [Usercontroller]
})
export class UserHttpModule {}

//นำ usremodlue มาจะสามารถใช้ @InjectRepository(User)ในผู้ให้บริการของโมดูลหลังได้