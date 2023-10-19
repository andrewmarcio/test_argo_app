import { TStatus } from "@domain/entities/status";
import { Task } from "@domain/entities/task";

export interface TaskServiceInterface {
    getByStatusTasks(status: TStatus): Promise<Task[]>
    getByIdTask(id: string): Promise<Task>
    createTask(data: Task): Promise<Task>
    finishedTask(id: string): Promise<void>
    updateTask(id: string, data: Omit<Task, 'id'>): Promise<Task>
    deleteTask(id: string): Promise<void>
}