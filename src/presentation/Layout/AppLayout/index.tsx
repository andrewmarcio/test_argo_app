import { Layout } from '@ui-kitten/components'
import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            {children}
        </Layout>
    </SafeAreaView>
}

export { AppLayout }
