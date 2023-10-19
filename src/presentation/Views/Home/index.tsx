import { FC, memo, useMemo, useState } from 'react'
import { Container, Content, Header, Row, Input, Button } from './home.styled'
import { Task } from '@domain/entities/task'
import { List } from '@presentation/Components/List'
import { Text } from '@ui-kitten/components'
import { AppIcon } from '@presentation/Components/AppIcon'

function useTasks() {
    const tasks = useMemo((): Task[] => {
        return Array.from<Task, Task>({ length: 5 }, (_, key) => ({
            title: `title ${key + 1}`,
            description: 'lorem inpus',
            status: 'completed',
        }))
    }, [])

    return {
        tasks,
    }
}

const Home: FC = memo(() => {
    const { tasks } = useTasks()
    const [searchValue, setSearchValue] = useState<string>('')

    const filteredTasks = useMemo(() => {
        return tasks.filter(({ title }) => title.includes(searchValue))
    }, [searchValue, tasks])

    return (
        <Container>
            <Header>
                <Text category="h3">Tasks</Text>
                <Row>
                    <Input
                        placeholder="Search task"
                        value={searchValue}
                        onChangeText={nextValue => setSearchValue(_ => nextValue)}
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
