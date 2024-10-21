import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import style from './rnStyleSheet.style'

const RNStyleSheet = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>RNStyleSheet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constiner: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 10
    }
})

export default RNStyleSheet