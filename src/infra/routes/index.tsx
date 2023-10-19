import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC, memo } from 'react'
import { Home } from '@presentation/views'

const RouterStack = createNativeStackNavigator()

const Routes: FC = memo(() => {
    return (
        <RouterStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RouterStack.Screen name="/" component={Home} />
        </RouterStack.Navigator>
    )
})

export { Routes }
