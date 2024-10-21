import React, { useEffect } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import screenName from '../screenName';
import DraggableList from '../../screens/dragAndSwapImageList/DragAndSwapImageList';
import Home from '../../screens/home/Home';
import RNStyleSheet from '../../screens/rnStyleSheet/RNStyleSheet';
import Header from '../../screens/header/Header';
import Button from '../../screens/button/Button';
import Login from '../../screens/login/Login';
import Dashboard from '../../screens/dashboard/Dashboard';
import ActivityIndicatorComponent from '../../screens/activityIndicator/ActivityIndicatorComponent';
import SnackbarComponent from '../../screens/snackbarCompoent/SnackbarComponent';
import RenderHtml from '../../screens/renderHtml/RenderHtml';
import ReduxImplementation from '../../screens/reduxImplementation/ReduxImplementation';
import SpeechToText from '../../screens/speechToText/SpeechToText';

const Stack = createStackNavigator();

export type AuthParams = {
  home: undefined;
  imageDraggable: undefined;
  rnStyleSheet: undefined
  header: undefined
  button: undefined
  login: undefined
  dashboard: undefined
  activityIndicator: undefined
  snackbar: undefined
  renderHtml: undefined
  reduxImplementation: undefined
  speechToText: undefined
};

export type AuthNavigationProps = StackNavigationProp<AuthParams>;

const AuthStack = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name={screenName.home} component={Home} />
      <Stack.Screen name={screenName.imageDraggable} component={DraggableList} />
      <Stack.Screen name={screenName.rnStyleSheet} component={RNStyleSheet} />
      <Stack.Screen name={screenName.header} component={Header} />
      <Stack.Screen name={screenName.button} component={Button} />
      <Stack.Screen name={screenName.login} component={Login} />
      <Stack.Screen name={screenName.dashboard} component={Dashboard} />
      <Stack.Screen name={screenName.activityIndicator} component={ActivityIndicatorComponent} />
      <Stack.Screen name={screenName.snackbar} component={SnackbarComponent} />
      <Stack.Screen name={screenName.renderHtml} component={RenderHtml} />
      <Stack.Screen name={screenName.reduxImplementation} component={ReduxImplementation} />
      <Stack.Screen name={screenName.speechToText} component={SpeechToText} />
    </Stack.Navigator>
  );
};

export default AuthStack;
