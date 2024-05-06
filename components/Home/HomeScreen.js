import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {

    // const clearOnboarding = async () => {
    //     try {
    //         await AsyncStorage.removeItem('@viewedOnboarding')
    //     } catch (err) {
    //         console.log('Error @clearOnboarding: ', err)
    //     }
    // }

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={clearOnboarding}>
                <Text>Clear Onboarding</Text>
            </TouchableOpacity> */}

            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>What time would you</Text>
                <Text style={styles.heading}>like to be reminded?</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
    },
    headingWrapper: {
        marginTop: 80,
    },
    heading: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
    },
})