import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { CreateTodoRepository } from "../repository";



@Injectable() 
export class createTodoRepository {
    constructor(
        private readonly logger: Logger,
        private readonly createTodoRepository: CreateTodoRepository
    ) {}

    async execute(data: CreateTodoDto) {
        try{
            this.logger.log('Creating toDo... ');
            const todo = await this.createTodoRepository.createTodo(data);
            this.logger.log('ToDo Created Sucessfully');
            return todo;
        }   catch(error) {
            this.logger.error(error);
            throw new Error('failed to create toDo');
        }
            
    }
    }


