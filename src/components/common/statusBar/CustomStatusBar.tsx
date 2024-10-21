import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { CustomStatusBarProps } from './customStatusBar.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const CustomStatusBar = (props: CustomStatusBarProps) => {
    const inserts = useSafeAreaInsets()

    return (
        <View style={[{ top: inserts.top }, props.containerStyle]}>
            <StatusBar
            animated={props.animated}
                backgroundColor={props.backgroundColor}
                barStyle={props.barStyle}
                translucent={props.translucent}
            />
        </View>
    )
}

export default CustomStatusBar