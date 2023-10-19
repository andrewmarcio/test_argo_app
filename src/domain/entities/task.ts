import { TStatus } from "./status"

export interface Task {
    id: string;
    title: string
    description: string
    status: TStatus
}