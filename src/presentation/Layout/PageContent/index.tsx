import { FC, memo } from 'react'
import { Button, Container, Content, Header, Input, Row } from './page-content.styled'
import { Text } from '@ui-kitten/components'
import { AppIcon, List } from '@presentation/Components'
import { TStatus } from '@domain/entities/status'
import { FormModal } from '@presentation/Modal'
import { usePageContentController } from './page-content.controller'

type Props = {
    pageTitle?: string
    type: TStatus
}
const PageContent: FC<Props> = memo(({ pageTitle, type }) => {
    const {
        isPending,
        searchValue,
        formModalRef,
        filteredTasks,
        refresh,
        showModal,
        setSearchValue,
        handleClearInput,
        handleItemActionClick,
    } = usePageContentController(type)
    return (
        <Container>
            <Header>
                <Text category="h3">{pageTitle}</Text>
                <Row>
                    {isPending && (
                        <Button accessoryLeft={<AppIcon name="plus-outline" />} onPress={showModal} />
                    )}
                    <Input
                        placeholder="Search task"
                        value={searchValue}
                        onClearInput={handleClearInput}
                        onChangeText={setSearchValue}
                    />
                    <Button accessoryLeft={<AppIcon name="sync-outline" />} onPress={refresh} />
                </Row>
            </Header>
            <Content>
                <List data={filteredTasks} handleItemActionClick={handleItemActionClick} />
            </Content>
            <FormModal ref={formModalRef} refresh={refresh} />
        </Container>
    )
})

export { PageContent }
