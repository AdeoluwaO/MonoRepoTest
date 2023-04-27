import React from 'react';
import { View, Text } from 'react-native';

interface TextProps {
    text: string
}

export const TestText = ({text}: TextProps) => {
    return(
    <View>
        <Text>{text}</Text>
    </View>
        )
}


