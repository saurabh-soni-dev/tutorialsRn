import { Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { CheckboxProps } from './checkbox.interface'
import imageIndex from '../../assets/imageIndex'
import { style } from './checkbox.style'

const Checkbox: FC = (props: CheckboxProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={style.container}>
            {props.value ?
                <Image style={style.checkedImageStyle} source={imageIndex.checked} /> :
                <Image style={style.unCheckedImageStyle} source={imageIndex.unchecked} />
            }
            <Text style={style.titleText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Checkbox