import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Dimensions } from 'react-native';

//const { height, width } = Dimensions.get('window')

export const DimensionScreen = () => {

    const { height, width } = useWindowDimensions()
    return (
        <View>
            <View style={style.container}>
                <View style={{
                    ...style.puprpleBox,
                    width: width * 0.6
                }}></View>
            </View>

            <Text style={style.title}>W: {width}, h: {height}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        //width: '100%',
        width: 300,
        height: 300,
        backgroundColor: 'red',
    },
    puprpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})
