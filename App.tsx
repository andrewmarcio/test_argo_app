import { StatusBar } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from '@infra/routes'
import { AppLayout } from '@presentation/Layout/AppLayout'

function App(): JSX.Element {
    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <AppLayout>
                    <Routes />
                </AppLayout>
            </NavigationContainer>
        </ApplicationProvider>
    )
}

export default App
