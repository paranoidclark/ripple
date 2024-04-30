import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, scrollTo, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={scrollTo}
            activeOpacity={0.7}
            className={`bg-#493d8a rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}

export default CustomButton
