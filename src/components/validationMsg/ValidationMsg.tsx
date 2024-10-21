import { View, Text } from 'react-native'
import React from 'react'
import { style } from './validationMsg.style'
import { ValidationMsgProps } from './validationMsg.interface'

const ValidationMsg = (props: ValidationMsgProps) => {
    return (
        <View style={[style.conatiner, props.errorContainerStyle]}>
            <Text style={[style.errorText, props.errorTextStyle]}>{props.errorText}</Text>
        </View>
    )
}

export default ValidationMsg