import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTab';
import screenName from '../screenName';
import Home from '../../screens/home/home/Home';
import EmptyEvent from '../../screens/home/emptyEvent/EmptyEvent';
import Notification from '../../screens/home/notification/Notification';
import NoticeBoard from '../../screens/home/noticeBoard/NoticeBoard';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{headerShown: false}}
      initialRouteName={screenName.home}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name={screenName.home} component={Home} />
      <Tab.Screen name={screenName.emptyEvent} component={EmptyEvent} />
      <Tab.Screen name={screenName.noticeBoard} component={NoticeBoard} />
      <Tab.Screen name={screenName.notification} component={Notification} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
