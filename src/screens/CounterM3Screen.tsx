import React, { useState } from 'react'
import { globalStyles } from '../presentation/theme/global.style'
import { StyleSheet, View } from 'react-native'
import { FAB, Text } from 'react-native-paper'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

export const CounterM3Screen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.centerContainer}>

            <Text style={globalStyles.title}>{count}</Text>

            <FAB

                style={styles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}

                icon={() => <FontAwesome6 name="plus" iconStyle="solid" size={25} />}
            />

        </View>

    )
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 15,
    },
})
