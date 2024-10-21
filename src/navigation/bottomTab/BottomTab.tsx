import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import style from './bottomTab.style';
import {color} from '../../theme';
import SvgIndex from '../../assets/svgIndex';
import screenName from '../screenName';

const BottomTab: React.FC<BottomTabBarProps> = props => {
  const {index} = props.state;
  return (
    <View style={style.container}>
      <View style={style.mainView}>
        <TouchableOpacity
          style={style.tabButton}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenName.home)}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 0 ? color.primary : color.white},
              ]}
            />
          </View>
          <View style={style.iconView}>
            <SvgIndex.homeIcon
              stroke={index === 0 ? color.primary : color.gray400}
              fill={index === 0 ? color.primary : color.gray400}
            />
            <Text
              style={[
                style.tabText,
                {
                  color: index === 0 ? color.primary : color.gray400,
                },
              ]}>
              Home
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 0 ? color.primary : color.white},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabButton}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenName.emptyEvent)}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 1 ? color.primary : color.white},
              ]}
            />
          </View>
          <View style={style.iconView}>
            <SvgIndex.calendarIcon
              fill={index === 1 ? color.primary : color.gray400}
            />
            <Text
              style={[
                style.tabText,
                {
                  color: index === 1 ? color.primary : color.gray400,
                },
              ]}>
              Bookings
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 1 ? color.primary : color.white},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabButton}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenName.noticeBoard)}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 2 ? color.primary : color.white},
              ]}
            />
          </View>
          <View style={style.iconView}>
            <SvgIndex.noticeBoardIcon
              stroke={index === 2 ? color.primary : color.gray400}
            />
            <Text
              style={[
                style.tabText,
                {
                  color: index === 2 ? color.primary : color.gray400,
                },
              ]}>
              Notice board
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 2 ? color.primary : color.white},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabButton}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenName.notification)}>
          <View style={style.lineView}>
            <View
              style={[
                style.topView,
                {backgroundColor: index === 3 ? color.primary : color.white},
              ]}
            />
          </View>
          <View style={style.iconView}>
            <SvgIndex.notificationIcon
              fill={index === 3 ? color.primary : color.gray400}
            />
            <Text
              style={[
                style.tabText,
                {
                  color: index === 3 ? color.primary : color.gray400,
                },
              ]}>
              Notifications
            </Text>
          </View>
          <View style={style.lineView}>
            <View
              style={[
                style.halfCurveView,
                {backgroundColor: index === 3 ? color.primary : color.white},
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomTab;
