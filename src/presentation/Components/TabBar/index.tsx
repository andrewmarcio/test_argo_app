import { Tab, TabBar as TabBarKitten } from '@ui-kitten/components'
import { FC, memo } from 'react'
import { AppIcon } from '../AppIcon'

const TabBar: FC = memo(() => {
    return (
        <TabBarKitten selectedIndex={1}>
            <Tab title="Pending" icon={<AppIcon name="clock-outline"/>} />
            <Tab title="Finished" icon={<AppIcon name="checkmark-circle-2-outline"/>} />
            <Tab title="Deleted" icon={<AppIcon name="trash-2-outline"/>} />
        </TabBarKitten>
    )
})

export { TabBar }
