import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeormExModule } from '../databases/typeorm-ex.module';
import { TasksRepository } from './tasksRepository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeormExModule.forCustomRepository([TasksRepository]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
