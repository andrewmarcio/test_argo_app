import { Tab, TabBar as TabBarKitten } from '@ui-kitten/components'
import { FC, memo } from 'react'
import { AppIcon } from '../AppIcon'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'

const TabBar: FC<MaterialTopTabBarProps> = memo(({ navigation, state }) => {
    return (
        <TabBarKitten
            selectedIndex={state?.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}
        >
            <Tab title="Pending" icon={<AppIcon name="clock-outline" />} />
            <Tab title="Finished" icon={<AppIcon name="checkmark-circle-2-outline" />} />
        </TabBarKitten>
    )
})

function makeTabBar(props: MaterialTopTabBarProps) {
    return <TabBar {...props} />
}

export { TabBar, makeTabBar }
