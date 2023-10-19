import { FC, memo, useCallback, useMemo } from 'react'
import { ButtonGroup, ListContainer, ListItem, TextContainer } from './list.styled'
import { ButtonProps, Divider, Text, useTheme } from '@ui-kitten/components'
import { ListRenderItemInfo } from 'react-native'
import { Task } from '@domain/entities/task'
import { AppIcon } from '../AppIcon'
import { TStatus } from '@domain/entities/status'
import { Button } from '../Button'

type Props = {
    data: Task[]
    handleItemActionClick(id: string, typeAction: 'complete' | 'edit' | 'delete'): () => void
}

type TIconName = {
    [key in TStatus]: { name: string; fill: string }
}

const List: FC<Props> = memo(({ data, handleItemActionClick }) => {
    const theme = useTheme()

    const iconName = useMemo(() => {
        return {
            pending: { name: 'clock-outline', fill: theme['color-primary-500'] },
            completed: { name: 'checkmark-circle-2-outline', fill: theme['color-primary-500'] },
        } as TIconName
    }, [])

    const _renderItem = useCallback(({ item, index }: ListRenderItemInfo<Task>) => {
        const { id, title, status } = item
        return (
            <ListItem
                key={index}
                title={
                    <TextContainer>
                        <Text adjustsFontSizeToFit category="h7">{`${title}`}</Text>
                    </TextContainer>
                }
                accessoryLeft={<AppIcon {...iconName[status]} />}
                accessoryRight={
                    <ActionButton type={status} id={id} handleItemActionClick={handleItemActionClick} />
                }
            />
        )
    }, [])
    return <ListContainer data={data} ItemSeparatorComponent={Divider} renderItem={_renderItem} />
})

type ActionButtonProps = {
    id: string
    type: TStatus
    handleItemActionClick: Props['handleItemActionClick']
}
const ActionButton: FC<ActionButtonProps> = memo(({ id, type, handleItemActionClick }) => {
    const buttonActions = useMemo((): ButtonProps[] => {
        if (type === 'pending') {
            return [
                {
                    status: 'success',
                    accessoryLeft: <AppIcon name="checkmark-square-outline" />,
                    onPress: handleItemActionClick(id, 'complete'),
                },
                {
                    status: 'warning',
                    accessoryLeft: <AppIcon name="edit-outline" />,
                    onPress: handleItemActionClick(id, 'edit'),
                },
                {
                    status: 'danger',
                    accessoryLeft: <AppIcon name="close-outline" />,
                    onPress: handleItemActionClick(id, 'delete'),
                },
            ]
        }

        return [
            {
                status: 'danger',
                accessoryLeft: <AppIcon name="close-outline" />,
                onPress: handleItemActionClick(id, 'delete'),
            },
        ]
    }, [type])

    return (
        <ButtonGroup>
            {buttonActions.map(buttonProps => (
                <Button {...buttonProps} size="tiny" />
            ))}
        </ButtonGroup>
    )
})

export { List }
