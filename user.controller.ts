import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { identity } from 'rxjs';
import { CreatUserDTO } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class Usercontroller{
    constructor(private readonly userService: UserService){

    }

    @Get(':id')
    getShow(@Param('id') identity: number) : any{
        return this.userService.getUserById(identity);
    }

    @Post()
        async postCreate(@Body() createUserDTO: CreatUserDTO): Promise<string> {
    const newUser = new User();
    newUser.username = createUserDTO.username;
    newUser.phonenumber = createUserDTO.phonenumber;

    // บันทึกผู้ใช้
    const createdUser = await this.userService.createUser(newUser);

    return "User created with ID: " + createdUser.id;
}

}

