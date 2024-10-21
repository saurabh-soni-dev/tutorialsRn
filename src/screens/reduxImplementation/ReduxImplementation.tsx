import { View, Text } from 'react-native'
import React from 'react'
import { style } from './reduxImplementation.style'
import reduxImplementationController from './reduxImplementation.controller'
import { TouchableOpacity } from 'react-native'
import CustomDropdown from '../../components/customDropdown/CustomDropdown'

const ReduxImplementation = () => {
    const { onStoreData } = reduxImplementationController()

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
      ];
    const handleDropdownSelect = (value: string) => {
        console.log('Selected option:', value);
        // Do something with the selected value
      };
    return (
        // <View style={style.container}>
        //     <Text
        //         style={style.text}>
        //         Store & Get user data on Redux
        //     </Text>
        //     <TouchableOpacity onPress={onStoreData}>
        //         <Text>store data</Text>
        //     </TouchableOpacity>
        // </View>
        <View style={{ margin:20 }}>
        <CustomDropdown options={options} onSelect={handleDropdownSelect} />
      </View>
    )
}

export default ReduxImplementation