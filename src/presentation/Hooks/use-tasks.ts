import { Task } from "@domain/entities/task"
import { useMemo } from "react"

function useTasks() {
    const tasks = useMemo((): Task[] => {
        return Array.from<Task, Task>({ length: 5 }, (_, key) => ({
            title: `title ${key + 1}`,
            description: 'lorem inpus',
            status: 'deleted',
        }))
    }, [])

    return {
        tasks,
    }
}

export { useTasks }