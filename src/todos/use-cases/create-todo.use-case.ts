import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";



@Injectable() 
export class createTodoRepository {
    createTodoRepository: any;
    constructor(
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateTodoDto) {
        try{
            this.logger.log('Creating toDo... ');
            const todo = await this.createTodoRepository.create(data);
            this.logger.log('ToDo Created Sucessfully');
            return todo;
        }   catch(error) {
            this.logger.error(error);
            throw new Error('failed to create toDo');
        }
            
    }
    }


