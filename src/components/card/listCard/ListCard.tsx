import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { style } from './listCard.style'
import { listCardProps } from './listCard.interface'
import color from '../../../theme/color'

const ListCard: FC<listCardProps> = ({ item, index, onPress }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, color:color.white }}>{index + 1}.</Text>
                <Text style={{ fontSize: 18, marginLeft: 5,color:color.white }}>{item?.name}</Text>
            </View>
            <Text style={{ fontSize: 20 }}>{">"}</Text>
        </TouchableOpacity>
    )
}

export default ListCard