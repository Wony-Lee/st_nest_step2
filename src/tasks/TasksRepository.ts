import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CustomRepository } from '../databases/typeorm-ex.decorator';

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {}
