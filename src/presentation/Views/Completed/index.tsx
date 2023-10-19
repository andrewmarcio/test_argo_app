import { PageContent } from '@presentation/Layout/PageContent'
import { FC, memo } from 'react'

const Completed: FC = memo(() => {
    return <PageContent type="completed" />
})

export { Completed }
