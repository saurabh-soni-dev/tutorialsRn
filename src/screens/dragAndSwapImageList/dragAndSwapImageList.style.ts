import {StatusBarStyle, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  shadow: {
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding:20
  },
  statusBar: {
    color: "orange",
    barStyle: <StatusBarStyle>'light-content',
  },
  homeScrollView: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop:20
  },
  gridRootContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  gridMyFriendsView: {
    width: '90%',
    height: 30,
    borderRadius: 12,
    backgroundColor:"orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 16,
  },
  gridListItem: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 6,
    overflow: 'hidden',
  },
  gridListItemMovedOver: {
    borderWidth: 3,
    // borderColor:,
  },
  imageCover: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default style;
