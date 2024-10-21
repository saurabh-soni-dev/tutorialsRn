import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TextButton from '../../components/common/button/TextButton'

const Button = () => {
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
    <View style={{ padding: 20 }}>
      <TextButton
        title='Submit'
        isLoading={loading}
        onPress={onClick} />
    </View>
  )
}  

export default Button