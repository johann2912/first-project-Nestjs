import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Param,
  Put,
  //Req,
  //Res,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('task')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
    /*
  getTask(@Req() req, @Res() res): Response {
    return res.send('Hello World');
  */
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return `Deleting a task: ${id}`;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return `Updating a task ${id}`;
  }
}
