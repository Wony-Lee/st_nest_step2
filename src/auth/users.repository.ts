import { CustomRepository } from '../databases/typeorm-ex.decorator';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@CustomRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredential: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredential;

    const user = this.create({ username, password });
    await this.save(user);
  }
}
