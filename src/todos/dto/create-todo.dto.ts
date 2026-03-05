export class CreateTodoDto {
    title: string;
    description: string;
    completed: boolean;
    priority: TodoPriority;
    dueAt: Date;
    completedAt: Date;
    userId: string;
    createdAt: Date;
    updateAt: Date;
}

enum TodoPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM' ,
    HIGH = 'HIGH',
}
 