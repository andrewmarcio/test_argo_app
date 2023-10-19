import { FC, memo } from 'react'
import { Completed, Home } from '@presentation/Views'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { makeTabBar } from '@presentation/Components'

const RouterStack = createMaterialTopTabNavigator()

const Routes: FC = memo(() => {
    return (
        <RouterStack.Navigator tabBar={makeTabBar} tabBarPosition="bottom">
            <RouterStack.Screen name="Home" component={Home} />
            <RouterStack.Screen name="Completed" component={Completed} />
        </RouterStack.Navigator>
    )
})

export { Routes }
