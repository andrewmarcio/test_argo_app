import { FC, memo, useCallback, useMemo } from 'react'
import { Container, Content, Header, Row, Input, Button } from './home.styled'
import { List } from '@presentation/Components/List'
import { Text } from '@ui-kitten/components'
import { AppIcon } from '@presentation/Components/AppIcon'
import { useSearch, useTasks } from '@presentation/Hooks'

const Home: FC = memo(() => {
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

export { Home }
