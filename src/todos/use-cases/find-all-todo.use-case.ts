import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";

@Injectable() 
export class FindAllRepository {
    FindAllRepository: any;
    constructor(
        private readonly logger: Logger,
    ) {}

    async AcharTodo(data: FindAllTodosRepository) {
        try{
            this.logger.log('Puxando ToDos');
            const todos = await this.FindAllRepository.findAll();
            this.logger.log('itens');
            return todos;
        }   catch(error) {
            this.logger.error(error);
            throw new Error('erro');
        }
            
    }
    }


