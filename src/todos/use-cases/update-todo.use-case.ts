import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository, updateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";


@Injectable()
export class updateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: updateTodoRepository,
        private readonly FindByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,

    ) { }
    async update(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log(`Updating todo ${id}...`);
            const todo = await this.FindByIdRepository.findById(id);
            if (!todo) {
                throw new Error(`Todo ${id} not found`);
            }
            return await this.updateTodoRepository.update(id, data);
        } catch (error) {
            this.logger.error(`Error updating todo ${id}:`, error);
            throw error;
        }
    }
}