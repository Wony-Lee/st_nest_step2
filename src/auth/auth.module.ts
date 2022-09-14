import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeormExModule } from '../databases/typeorm-ex.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeormExModule.forCustomRepository([UsersRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
