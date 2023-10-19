import { FC, memo, useCallback, useMemo } from 'react'
import { Button, Container, Content, Header, Input, Row } from './page-content.styled'
import { Text } from '@ui-kitten/components'
import { useSearch, useTasks } from '@presentation/Hooks'
import { AppIcon, List } from '@presentation/Components'
import { TStatus } from '@domain/entities/status'

type Props = {
    type: TStatus
}
const PageContent: FC<Props> = memo(({ type }) => {
    const { tasks } = useTasks()
    const { searchValue, setSearchValue } = useSearch()

    const filteredTasks = useMemo(() => {
        return tasks
            .filter(({ title }) => title.includes(searchValue))
            .filter(({ status }) => status === type)
    }, [searchValue, tasks])

    const _handleClearInput = useCallback(() => {
        setSearchValue('')
    }, [setSearchValue])

    return (
        <Container>
            <Header>
                <Text category="h3">Tasks</Text>
                <Row>
                    <Input
                        placeholder="Search task"
                        value={searchValue}
                        onClearInput={_handleClearInput}
                        onChangeText={setSearchValue}
                    />
                    <Button accessoryLeft={<AppIcon name="plus-outline" />} />
                </Row>
            </Header>
            <Content>
                <List data={filteredTasks} />
            </Content>
        </Container>
    )
})

export { PageContent }
