import { FC, memo, useCallback, useMemo } from 'react'
import { Button, Container, Content, Header, Input, Row } from '../../home.styled'
import { Text } from '@ui-kitten/components'
import { useSearch, useTasks } from '@presentation/Hooks'
import { AppIcon, List } from '@presentation/Components'

const PaddingContent: FC = memo(() => {
    const { tasks } = useTasks()
    const { searchValue, setSearchValue } = useSearch()

    const filteredTasks = useMemo(() => {
        return tasks.filter(({ title }) => title.includes(searchValue))
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

export { PaddingContent }
