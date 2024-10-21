import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/common/header/HeaderComponent'

const Header = () => {
  return (
    <View style={{ padding: 20 }}>
      <HeaderComponent centerTitle='Reusable Header' leftIcon />
      <HeaderComponent centerTitle='Second header'  />
    </View>
  )
}

export default Header