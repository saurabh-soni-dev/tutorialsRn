import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-community/voice';

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');


  const startRecognition = async () => {
    try {
      await Voice.start('en-US'); // Change the locale as needed
      setIsListening(true);
      setRecognizedText('');
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopRecognition = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  };

  Voice.onSpeechResults = (event) => {
    const { value } = event;
    if (value) {
      setRecognizedText(value[0]);
      stopRecognition
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={isListening ? stopRecognition : startRecognition} />
      <Text style={{}}>Recognized Text: {recognizedText}</Text>
    </View>
  );
};

export default SpeechToText;
