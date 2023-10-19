import { FC, memo, useCallback, useMemo } from 'react'
import { ListContainer, ListItem, TextContainer } from './list.styled'
import { Divider, Text, useTheme } from '@ui-kitten/components'
import { ListRenderItemInfo } from 'react-native'
import { Task } from '@domain/entities/task'
import { AppIcon } from '../AppIcon'
import { TStatus } from '@domain/entities/status'

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
            cancelled: { name: 'close-circle-outline', fill: theme['color-primary-500'] },
            pending: { name: 'clock-outline', fill: theme['color-primary-500']},
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
            />
        )
    }, [])

    return <ListContainer data={data} ItemSeparatorComponent={Divider} renderItem={_renderItem} />
})

export { List }
