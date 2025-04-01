import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const FlexScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.box1}/>
            <View style={style.box2}/>
            <View style={style.box3}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box1: {
        flex: 1,
        backgroundColor: '#5856D6'
    },
    box2: {
        flex: 1,
        backgroundColor: 'green'
    },
    box3: {
        flex: 1,
        backgroundColor: 'purple'
    },
})
