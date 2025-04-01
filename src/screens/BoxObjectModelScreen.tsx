import React from 'react'
import { StyleSheet, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
          {/*   <Text style={styles.title}>Hola mundo</Text> */}
            <View style={ styles.purpleBox }></View>
            <View style={ styles.purpleBox }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 40,
        borderWidth: 10,
    },
    purpleBox: {
        //flex: 1,
        height : 30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
    }
})
