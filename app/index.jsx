import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Onboarding from '../components/Onboarding';
import HomeScreen from '../components/Home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default function App() {
    const [loading, setLoading] = useState(true)
    const [viewedOnboarding, setViewedOnboarding] = useState(false)

    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding')

            if (value !== null) {
                setViewedOnboarding(true)
            }
        } catch (error) {
            console.log('Error @checkOnboarding: ', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkOnboarding()
    }, [])

    return (
        <View style={styles.container}>
            {loading ? <Loading /> : viewedOnboarding ? <HomeScreen /> : <Onboarding />}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
