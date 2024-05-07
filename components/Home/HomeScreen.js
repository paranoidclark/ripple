import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function HomeScreen() {

    // const clearOnboarding = async () => {
    //     try {
    //         await AsyncStorage.removeItem('@viewedOnboarding')
    //     } catch (err) {
    //         console.log('Error @clearOnboarding: ', err)
    //     }
    // }

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={clearOnboarding}>
                <Text>Clear Onboarding</Text>
            </TouchableOpacity> */}

            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>What time would you</Text>
                <Text style={styles.heading}>like to be reminded?</Text>

                <Text style={styles.subHeading}>
                    Set your daily hydration schedule and we will remind you to drink water throughout the day.
                </Text>
            </View>

            <View style={styles.timePickerWrapper}>
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
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
        fontWeight: 'bold',
        lineHeight: 30,
    },
    subHeading: {
        fontSize: 16,
        fontWeight: '300',
        marginTop: 15,
        lineHeight: 30,
    },
    timePickerWrapper: {
        marginTop: 40,
    }
})