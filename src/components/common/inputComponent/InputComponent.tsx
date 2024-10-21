import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { InputComponentProps } from './inputComponent.interface'
import style from './inputComponent.style'

const InputComponent = (props: InputComponentProps) => {
    const [passVisible, setPassVisible]
        = useState<boolean | undefined>(props.secureText)

    return (
        <View style={[style.containerStyle,props.conatinerStyle]}>
            <Text style={style.lableText}>{props.lable}</Text>
            <View style={style.rowContainer}>
                <TextInput
                    style={style.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeHolderTextColor}
                    onChangeText={props.setValue}
                    // value={props.value}
                    keyboardType={props.keyboardType}
                    secureTextEntry={passVisible}
                />
                {props.hideText && (
                    <TouchableOpacity onPress={() => setPassVisible(!passVisible)}>
                        {!passVisible ? <Text>hide</Text> : <Text>show</Text>}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}



export default InputComponent