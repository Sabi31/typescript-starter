import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
import { Prisma } from "@prisma/client";

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(data: CreateTodoDto) {
    const { userId, ...payload } = data;
    const createData: Prisma.TodoUncheckedCreateInput = {
      ...payload,
      userid: userId,
    };

    return await this.prisma.todo.create({ data: createData });
  }
}