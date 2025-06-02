import { StyleSheet, } from 'react-native'
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import React from 'react'

export default function Register() {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register for Account
            </ThemedText>
            <Spacer height={100} />
            <Link href='/login'>
                <ThemedText style={{ textAlign: 'center' }}>
                    Login Instead
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    }
})