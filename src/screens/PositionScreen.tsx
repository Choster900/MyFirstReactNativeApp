import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PositionScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.purpleBlox}></View>
            <View style={style.orangeBlox}></View>
            <View style={style.GreenBlox}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        /*    justifyContent: 'center',
           alignItems: 'center' */
    },
    purpleBlox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0

    },
    orangeBlox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        left: 0

    },
    GreenBlox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0

    }
})
