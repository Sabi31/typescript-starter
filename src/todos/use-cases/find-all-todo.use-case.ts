import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";


@Injectable()
export class FindAllUseCase {

  constructor(
     private readonly findAllTodosRepository: FindAllTodosRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      this.logger.log(`Puxando todos`);

         const result = await this.findAllTodosRepository.findAll();

      this.logger.log(`Itens encontrados com sucesso`);
      if (!result) {this.logger.error(`nenhum item encontrado`)}
      return result;
    } catch (error) {
      this.logger.error(`Erro ao encontrar itens: ${error.message}`);
      throw error;
    }
  }
}