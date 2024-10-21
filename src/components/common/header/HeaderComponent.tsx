import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { HeaderComponentProps } from './headerComponent.interface'
import imageIndex from '../../../assets/imageIndex'
import headerComponentController from './headerComponent.controller'

const HeaderComponent: FC<HeaderComponentProps> = ({ centerTitle, leftIcon }) => {
    const { backHandler } = headerComponentController()
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={backHandler}>
                <Image source={imageIndex.backIcon}
                    style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: 'black' }}>{centerTitle}</Text>
            <View>{leftIcon && (
                <TouchableOpacity>
                    <Image source={imageIndex.searchIcon} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            )}</View>
        </View>
    )
}

export default HeaderComponent