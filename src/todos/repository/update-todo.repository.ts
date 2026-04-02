import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class updateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update (id: string, data: UpdateTodoDto) {
    const updateData: Prisma.TodoUncheckedUpdateInput = data;

    return await this.prisma.todo.update({
        where: {id},
        data: updateData,
    });
  }
}