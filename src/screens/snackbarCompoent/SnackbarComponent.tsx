import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Snackbar from 'react-native-snackbar'
import HeaderComponent from '../../components/common/header/HeaderComponent'
import CustomStatusBar from '../../components/common/statusBar/CustomStatusBar'

const SnackbarComponent = () => {
    const onSubmit = () => {
        Snackbar.show({
            text: 'Follow for more post!',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'red',
            
        })

    }

    return (
        <View style={{ padding: 20 }}>
            <CustomStatusBar barStyle='light-content'
                backgroundColor='red' />
            <HeaderComponent centerTitle='Snackbar' />
            <TouchableOpacity
                onPress={onSubmit}
                style={{
                    marginTop: 20,
                    backgroundColor: 'red',
                    padding: 10, alignItems: 'center'
                }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SnackbarComponent