import { Pressable, Text, Platform, StyleSheet } from "react-native"

interface Props {
    label: string
    onPress?: () => void
    onLongPress?: () => void
}

export const PrimaryButton = ({ label, onLongPress, onPress }: Props) => {
    return (


        <Pressable
            onPress={() => { onPress && onPress() }}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                style.button,
                pressed && style.buttonPressed
            ]}
        >
            <Text style={{
                color: Platform.OS == 'android' ? 'white' : '#4746AB'
            }}>{label}</Text>

        </Pressable>
    )

}


const style = StyleSheet.create({
    button: {
        backgroundColor: '#5856D6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: '#4746AB'
    }
})
