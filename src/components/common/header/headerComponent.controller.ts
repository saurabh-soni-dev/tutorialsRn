import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationProps } from '../../../navigation/stacks/authStack'

const headerComponentController = () => {
    const navigation = useNavigation<AuthNavigationProps>()
    const backHandler = () => {
        navigation.goBack()
    }
    return {
        backHandler
    }
}

export default headerComponentController