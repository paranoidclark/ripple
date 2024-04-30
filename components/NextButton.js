import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function NextButton({ percentage, scrollTo }) {

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6} title="Next">
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#f4338f',
        borderRadius: 25,
        padding: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
})