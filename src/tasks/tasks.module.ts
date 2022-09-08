import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeormExModule } from '../databases/typeorm-ex.module';
import { TasksRepository } from './TasksRepository';

@Module({
  imports: [TypeormExModule.forCustomRepository([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
