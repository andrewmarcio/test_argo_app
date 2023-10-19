import { FC, memo } from 'react'
import { Completed, Deleted, Home } from '@presentation/Views'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TabBar } from '@presentation/Components'

const RouterStack = createMaterialTopTabNavigator()
// const RouterStack = createNativeStackNavigator()

const Routes: FC = memo(() => {
    return (
        <RouterStack.Navigator
            tabBar={TabBar}
            screenOptions={
                {
                    // headerShown: false,
                }
            }
        >
            <RouterStack.Screen name="Home" component={Home} />
            <RouterStack.Screen name="Completed" component={Completed} />
            <RouterStack.Screen name="Deleted" component={Deleted} />
        </RouterStack.Navigator>
    )
})

export { Routes }
