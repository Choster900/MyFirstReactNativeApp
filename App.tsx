import React from 'react'
import { SafeAreaView } from 'react-native'
import { CounterScreen } from './src/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/screens/CounterM3Screen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/screens/DimensionScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1, paddingTop: 20 }} >
                {/* <CounterScreen></CounterScreen> */}
                |
                {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}

                {/* <DimensionScreen/> */}
               {/*  <PositionScreen /> */}
               <FlexScreen />
            </SafeAreaView>
        </PaperProvider>

    )
}
