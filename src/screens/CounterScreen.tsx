import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../presentation/components'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={style.container}>
            <Text style={style.title}>{count}</Text>

            <Button
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                mode='contained'
            >Incrementar</Button>

        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
})
