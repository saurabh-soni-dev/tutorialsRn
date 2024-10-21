import { View, Text, FlatList, ActivityIndicator, RefreshControl, } from 'react-native'
import React, { FC } from 'react'
import { screenName } from './home.const'
import style from './home.style'
import color from '../../theme/color'
import ListCard from '../../components/card/listCard/ListCard'
import homeController from './home.controller'

const Home: FC = () => {
  const { refreshing, setRefreshing, onNavigate } = homeController()

  return (
    <View style={style.container}>
      {refreshing ? (<ActivityIndicator />) : (
        <FlatList
          data={screenName}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListCard
                item={item}
                index={index}
                onPress={() => onNavigate(item?.nav)}
              />
            )
          }}
          ListHeaderComponent={
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
              <Text style={{ color: color.white, fontSize: 25, textDecorationLine: 'underline' }}>RN Tutorials</Text>
            </View>
          }
          ListEmptyComponent={<View style={style.emptyContainer}>
            <Text>No data!...</Text>
            <ActivityIndicator size='small' color={color.black} />
          </View>}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                // setRefreshing(true);
              }}
            />
          }
        />
      )}
    </View>
  )
}

export default Home