import { TStatus } from "@domain/entities/status"
import { Task } from "@domain/entities/task"
import { TaskService } from "@services/task-service"
import { useCallback, useEffect, useState } from "react"

function useTasks({ type }: { type: TStatus }) {
    const [tasks, setTasks] = useState<Task[]>()

    const _getTasks = useCallback(async () => {
        try {
            const service = new TaskService()
            const data = await service.getByStatusTasks(type)
            setTasks(state => data)
        } catch (error) {
            console.error({ error });
        }
    }, [type])

    const _refresh = useCallback(() => {
        _getTasks()
    }, [])

    useEffect(() => {
        _getTasks()
    }, [_getTasks])

    return {
        tasks,
        refresh: _refresh
    }
}

export { useTasks }