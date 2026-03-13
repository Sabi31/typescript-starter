import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";

@Injectable() 
export class FindAllRepository {
    FindAllRepository: any;
    constructor(
        private readonly logger: Logger,
    ) {}

    async AcharTudo(data: FindAllTodosRepository) {
        try{
            this.logger.log('Puxando ToDos');
            const todo = await this.FindAllRepository.execute();
            this.logger.log('itens');
            return todo;
        }   catch(error) {
            this.logger.error(error);
            throw new Error('erro');
        }
            
    }
    }


