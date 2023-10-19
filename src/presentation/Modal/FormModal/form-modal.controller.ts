import { Task } from "@domain/entities/task"
import { TaskService } from "@services/task-service"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useTheme } from "styled-components"

type Form = Task
type TCallback = () => void

function useFormModalController(refresh?: TCallback) {
    const theme = useTheme()
    const [visible, setVisible] = useState(false)

    const {
        control,
        formState: { defaultValues },
        handleSubmit,
        reset,
    } = useForm<Form>({
        defaultValues: {
            title: '',
            description: '',
        },
    })

    const _refresh = useCallback(() => {
        if (refresh) {
            refresh()
        }
    }, [])

    const _getTask = useCallback(async (id: string) => {
        try {
            const service = new TaskService()
            const data = await service.getByIdTask(id)
            reset(data)
        } catch (error) { }
    }, [])

    const _handleModalClose = useCallback(() => {
        setVisible(false)
    }, [])

    const _onSubmit = useCallback(async (data: Form) => {
        try {
            const service = new TaskService()
            if (data.id) {
                const { id, ...rest } = data
                await service.updateTask(id, rest)
                _refresh()
                setVisible(false)
                return
            }

            await service.createTask(data)
            _refresh()
            setVisible(false)
        } catch (error) { }
    }, [])

    useEffect(() => {
        if (!visible) {
            reset(defaultValues)
        }
    }, [visible])

    return {
        theme,
        visible,
        control,
        setVisible,
        handleSubmit,
        onSubmit: _onSubmit,
        handleModalClose: _handleModalClose,
        getTask: _getTask
    }
}

export { useFormModalController }