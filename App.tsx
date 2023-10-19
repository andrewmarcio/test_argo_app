import { StatusBar } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from '@infra/routes'
import { AppLayout } from '@presentation/Layout/AppLayout'
import { ThemeProvider } from 'styled-components'

function App(): JSX.Element {
    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <IconRegistry icons={EvaIconsPack} />
            <NavigationContainer>
                <ThemeProvider theme={eva.dark}>
                    <AppLayout>
                        <Routes />
                    </AppLayout>
                </ThemeProvider>
            </NavigationContainer>
        </ApplicationProvider>
    )
}

export default App
