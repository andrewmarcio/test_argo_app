import { forwardRef, memo, useImperativeHandle } from 'react'
import { CardModal, ModalConTainer, Row } from './form-modal.styled'
import { Controller } from 'react-hook-form'
import { Button, Input } from '@presentation/Components'
import { useFormModalController } from './form-modal.controller'

type FormModalRef = {
    show(id?: string): void
}
type Props = {
    refresh?(): void
}
const FormModal = memo(
    forwardRef<FormModalRef, Props>(({ refresh }, ref) => {
        const {theme, control, visible, handleSubmit, setVisible, getTask, handleModalClose, onSubmit} = useFormModalController(refresh)

        useImperativeHandle(
            ref,
            () => ({
                show(id?: string) {
                    if (id) {
                        getTask(id)
                    }
                    setVisible(true)
                },
            }),
            [],
        )

        return (
            <ModalConTainer
                visible={visible}
                backdropStyle={{
                    backgroundColor: theme['color-basic-500'],
                }}
                onBackdropPress={handleModalClose}
            >
                <CardModal>
                    <Controller
                        control={control}
                        name="title"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                size="large"
                                placeholder="Title"
                                value={value}
                                onChangeText={onChange}
                                status="basic"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                value={value}
                                multiline={true}
                                textStyle={{ minHeight: 200 }}
                                placeholder="Description"
                                onChangeText={onChange}
                            />
                        )}
                    />

                    <Row>
                        <Button fullWidth onPress={handleModalClose} status="basic">
                            Close
                        </Button>
                        <Button fullWidth onPress={handleSubmit(onSubmit)} status="success">
                            Save
                        </Button>
                    </Row>
                </CardModal>
            </ModalConTainer>
        )
    }),
)

export { FormModal, FormModalRef }
