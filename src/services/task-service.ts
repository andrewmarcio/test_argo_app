import { TStatus } from "@domain/entities/status";
import { Task } from "@domain/entities/task";
import { TaskServiceInterface } from "@domain/services/task-service.interface";
import { AxiosAdapter } from "@infra/adapters/axios-adapter";

class TaskService implements TaskServiceInterface {
    private baseUrl: string = "tasks"

    getByStatusTasks(status: TStatus): Promise<Task[]> {
        return AxiosAdapter.get(`${this.baseUrl}/status/${status}`)
    }

    getByIdTask(id: string): Promise<Task> {
        return AxiosAdapter.get(`${this.baseUrl}/${id}`)
    }

    createTask(data: Task): Promise<Task> {
        return AxiosAdapter.post(this.baseUrl, data)
    }

    finishedTask(id: string): Promise<void> {
        return AxiosAdapter.put(`${this.baseUrl}/${id}/finished`)
    }

    updateTask(id: string, data: Omit<Task, 'id'>): Promise<Task> {
        return AxiosAdapter.put(`${this.baseUrl}/${id}`, data)
    }

    deleteTask(id: string): Promise<void> {
        return AxiosAdapter.delete(`${this.baseUrl}/${id}`)
    }
}

export { TaskService }