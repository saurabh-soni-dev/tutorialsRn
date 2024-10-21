import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'

const RenderHtml = () => {
    const width: any = useWindowDimensions()
    const source = {
        html: `
        <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>  `
    };

    return (
        <View style={{ padding: 20 }}>
            <RenderHTML
                contentWidth={width}
                source={source}
            />
        </View>
    )
}

export default RenderHtml