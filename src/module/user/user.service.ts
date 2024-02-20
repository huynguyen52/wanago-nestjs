import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userData: CreateUserDto) {
    const newUser = await this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
