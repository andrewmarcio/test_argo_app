import { TStatus } from "@domain/entities/status"
import { useSearch, useTasks } from "@presentation/Hooks"
import { FormModalRef } from "@presentation/Modal"
import { TaskService } from "@services/task-service"
import { useCallback, useMemo, useRef } from "react"

function usePageContentController(type: TStatus) {

    const { tasks, refresh } = useTasks({ type })
    const { searchValue, setSearchValue } = useSearch()

    const formModalRef = useRef<FormModalRef>(null)

    const filteredTasks = useMemo(() => {
        return (
            tasks
                ?.filter(({ title }) => title.includes(searchValue))
                ?.filter(({ status }) => status === type) ?? []
        )
    }, [searchValue, tasks])

    const isPending = useMemo(() => {
        return type === 'pending'
    }, [type])

    const _showModal = useCallback(() => {
        formModalRef.current?.show()
    }, [])

    const _handleClearInput = useCallback(() => {
        setSearchValue('')
    }, [setSearchValue])

    const _handleDelete = useCallback(async (id: string) => {
        try {
            const service = new TaskService()
            await service.deleteTask(id)
            refresh()
        } catch (error) { }
    }, [])

    const _handleFinishedTask = useCallback(async (id: string) => {
        try {
            const service = new TaskService()
            await service.finishedTask(id)
            refresh()
        } catch (error) { }
    }, [])

    const _handleItemActionClick = useCallback((id: string, typeAction: 'complete' | 'edit' | 'delete') => {
        return {
            complete: () => _handleFinishedTask(id),
            delete: () => _handleDelete(id),
            edit: () => formModalRef.current?.show(id),
        }[typeAction]
    }, [])

    return {
        isPending,
        searchValue,
        filteredTasks,
        formModalRef,
        refresh,
        setSearchValue,
        handleClearInput: _handleClearInput,
        handleItemActionClick: _handleItemActionClick,
        showModal: _showModal
    }
}

export { usePageContentController }