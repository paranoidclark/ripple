import React, { useState, useRef } from 'react'
import { StyleSheet, View, FlatList, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import OnboardingItem from '../components/OnboardingItem'
import HomeScreen from './Home/HomeScreen'
import Paginator from '../components/Paginator'
import NextButton from '../components/NextButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import slides from '../slides'

export default Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    // const navigation = useNavigation();

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    // Goes to the next slide if user scrolls atleast 50% of the current slide
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                // navigation.navigate('HomeScreen')
            } catch (err) {
                console.log('Error @setItem: ', err);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    // Puts everything into horizontal
                    horizontal
                    // Hides the scroll bar
                    showsHorizontalScrollIndicator={false}
                    // Makes the scroll view snap to the center of the slide
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})