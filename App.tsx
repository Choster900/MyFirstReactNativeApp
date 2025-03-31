import React from 'react'
import { SafeAreaView } from 'react-native'
import { CounterScreen } from './src/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/screens/CounterM3Screen';

export const App = () => {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1, paddingTop: 20 }} >
                {/* <CounterScreen></CounterScreen> */}

                <CounterM3Screen></CounterM3Screen>
            </SafeAreaView>
        </PaperProvider>

    )
}
