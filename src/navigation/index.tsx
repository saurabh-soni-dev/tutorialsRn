import 'react-native-gesture-handler';
import * as React from 'react';
import { DefaultTheme, NavigationContainer, DarkTheme, useTheme } from '@react-navigation/native';
import AuthStack from './stacks/authStack';
import color from '../theme/color';
import { useColorScheme } from 'react-native';

const Route = () => {
  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.black,
      background: color.white,
      text: color.white

    }
  }
  const theme = useColorScheme()
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : myTheme} >
      <AuthStack />
    </NavigationContainer>
  );
};

export default Route;
