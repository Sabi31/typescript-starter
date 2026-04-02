
import {
    IsBoolean,
    IsDateString,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
} from "class-validator";
import { TodoPrioity } from "@prisma/client";



export class CreateTodoDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    completed?: boolean;

    @IsEnum(TodoPrioity)
    @IsOptional()
    priority?: TodoPrioity;

    @IsDateString()
    @IsOptional()
    dueAt?: Date;

    @IsDateString()
    @IsOptional()
    completedAt?: Date;

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsDateString()
    @IsOptional()
    createdAt?: Date;

    @IsDateString()
    @IsOptional()
    updatedAt?: Date;
}
