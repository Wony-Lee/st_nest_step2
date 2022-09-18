import { CustomRepository } from '../databases/typeorm-ex.decorator';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@CustomRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredential: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredential;

    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (e) {
      console.log(e);
      if (e.code === 'ER_DUP_ENTRY')
        throw new ConflictException('Username already exists');
      else {
        throw new InternalServerErrorException();
      }
    }
  }
}
