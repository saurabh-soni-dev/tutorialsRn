import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import imageIndex from '../../assets/imageIndex';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value)
    onSelect(value);
    toggleDropdown();
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.text}>{selectedValue ? selectedValue : 'Select'}</Text>
        <Image source={isOpen ? imageIndex.backArrow : imageIndex.calender}
          style={styles.arrow} />
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              style={styles.optionItem}
              onPress={() => handleOptionSelect(option.value)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 25,
    backgroundColor: '#292E3C'
  },
  text: {
    fontSize: 12,
    lineHeight: 27,
    color: 'white'
  },
  arrow: {
    height: 15,
    width: 15,
    tintColor: '#FFDA9E'
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginTop: 5,
    paddingHorizontal: 25,
    paddingVertical: 18
  },
  optionItem: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
});

export default CustomDropdown;
