import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import color from '../../theme/color'
import dashboardController from './dashboard.controller'

const Dashboard: FC = () => {
    const { onSetItem, onGetItem, onRemoveItem } = dashboardController()
    return (
        <View style={{ padding: 20 }}>
            <Text
                style={{
                    textTransform: 'capitalize',
                    fontSize: 25,
                    color: color.black, textAlign: 'center'
                }}>
                how to use async storage{'\n'}(local storage) in react native
            </Text>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity onPress={onSetItem}>
                    <Text>Set Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onGetItem} style={{ marginTop: 10 }}>
                    <Text>Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onRemoveItem} style
                    ={{ marginTop: 10 }}>
                    <Text>Remove Data</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard