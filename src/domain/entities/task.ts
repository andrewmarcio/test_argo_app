import { TStatus } from "./status"

export interface Task {
    title: string
    description: string
    status: TStatus
}