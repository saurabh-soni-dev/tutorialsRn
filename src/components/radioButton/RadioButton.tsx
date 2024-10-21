import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imageIndex from '../../assets/imageIndex'
import { RadioButtonProps } from './radioButton.interface'
import style from './radioButton.style'

const RadioButton = (props: RadioButtonProps) => {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.container} onPress={props.onPressOne}>
                {props.value ?
                    <Image source={imageIndex.radioChecked} style={style.checkedImageStyle} />
                    : <Image source={imageIndex.radioUnchecked} style={style.unCheckedImageStyle} />
                }
                <Text style={style.titleText}>{props.titleOne}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.container, { marginLeft: 10 }]} onPress={props.onPressTwo}>
                {!props.value ?
                    <Image source={imageIndex.radioChecked} style={style.checkedImageStyle} />
                    : <Image source={imageIndex.radioUnchecked} style={style.unCheckedImageStyle} />
                }
                <Text style={style.titleText}>{props.titleTwo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RadioButton