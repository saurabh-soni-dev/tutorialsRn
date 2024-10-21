import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

const ActivityIndicatorComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  };

  return (
    <View style={{padding: 20}}>
        <Text style={{fontSize:30, textAlign:'center'}}>ActivityIndicator</Text>
      {isLoading && <ActivityIndicator size={'large'} color={'green'} />}
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          marginTop: 30,
          backgroundColor: 'blue',
          padding: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityIndicatorComponent;
