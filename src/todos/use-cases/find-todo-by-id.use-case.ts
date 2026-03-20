import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository, FindTodoByIdRepository } from "../repository";

@Injectable() 
export class FindID {
    constructor(
        private readonly logger: Logger,
        private readonly FindByIdRepository: FindTodoByIdRepository
    ) {}

    async AcharID(id: string) {
        try{
            this.logger.log(`Puxando toDo: ${id}`);
            const todos = await this.FindByIdRepository.findById(id);
            this.logger.log(`aqui esta o toDo ${id}: `);
            return todos;
        }   catch(error) {
            this.logger.error(error);
            throw new Error('erro');
        }
            
    }
    }


