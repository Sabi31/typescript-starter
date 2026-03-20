import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { createTodoRepository, DeleteteTodoUseCase, FindAllUseCase, FindID, UpdateTodoUseCase } from './use-cases';

@Injectable()
export class TodosService {

   constructor(
    private readonly logger: Logger, 
    private readonly createTodoUseCase: createTodoRepository,
    private readonly findAllTodosUseCase: FindAllUseCase,
    private readonly findTodoByIdUseCase: FindID,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteteTodoUseCase,    
   ) {} 


  async create(data: CreateTodoDto) {
    return await this.createTodoUseCase.execute(data);
  }

  async findAll() {
    return await this.findAllTodosUseCase.execute();
  }

  async findOne(id: string) {
    return await this.findTodoByIdUseCase.AcharID(id);
  }

  async update(id: string, data: UpdateTodoDto) {
     return await this.updateTodoUseCase.update(id, data);
  }

  async remove(id: string) {
     return await this.deleteTodoUseCase.Deletar(id);
  }

}