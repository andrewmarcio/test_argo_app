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
}

type TIconName = {
    [key in TStatus]: { name: string; fill: string }
}

const List: FC<Props> = memo(({ data }) => {
    const theme = useTheme()

    const iconName = useMemo(() => {
        return {
            deleted: { name: 'trash-2-outline', fill: theme['color-primary-500'] },
            pending: { name: 'clock-outline', fill: theme['color-primary-500'] },
            completed: { name: 'checkmark-circle-2-outline', fill: theme['color-primary-500'] },
        } as TIconName
    }, [])

    const _renderItem = useCallback(({ item, index }: ListRenderItemInfo<Task>) => {
        const { title, status } = item
        return (
            <ListItem
                key={index}
                title={
                    <TextContainer>
                        <Text adjustsFontSizeToFit category="h6">{`${title}`}</Text>
                    </TextContainer>
                }
                accessoryLeft={<AppIcon {...iconName[status]} />}
                accessoryRight={<ActionButton type={status} />}
            />
        )
    }, [])
    return <ListContainer data={data} ItemSeparatorComponent={Divider} renderItem={_renderItem} />
})

type ActionButtonProps = {
    type: TStatus
}
const ActionButton: FC<ActionButtonProps> = memo(({ type }) => {
    const buttonActions = useMemo((): ButtonProps[] => {
        if (type === 'pending') {
            return [
                {
                    status: 'success',
                    accessoryLeft:<AppIcon name="checkmark-outline" />,
                },
                {
                    status: 'danger',
                    accessoryLeft:<AppIcon name="close-outline" />,
                },
            ]
        }

        return [
            {
                status: 'warning',
                accessoryLeft:<AppIcon name="refresh-outline" />,
            },
            {
                status: 'danger',
                accessoryLeft:<AppIcon name="close-outline" />,
            },
        ]
    }, [type])

    return (
        <ButtonGroup>
            {buttonActions.map(buttonProps => (
                <Button {...buttonProps} size='tiny' />
            ))}
        </ButtonGroup>
    )
})

export { List }
