import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {TextButtonProps} from './textButton.interface';

const TextButton: FC<TextButtonProps> = ({title, isLoading, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
