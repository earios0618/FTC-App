import { View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from "../constants/Colors";

export default function ThemedCard({ style, ...props }) {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={[{ backgroundColor: theme.uibackground }, styles.card, style]}
            {...props}
        />
    )
}

const Styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})