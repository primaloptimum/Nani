import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Modal} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import login from './components/login'
import booking from './components/booking'
import signup from './components/signup'
import log from './components/log'
import profile from './components/profile'
import settings from './components/Profile/settings'
import privacy from './components/Profile/privacy'
import help from './components/Profile/help&support'


const BookingTab = createMaterialTopTabNavigator({
  log: { screen: log,
  navigationOptions:{
    tabBarLabel: 'Log',
    tabBarIcon: ({tintColor})=>(
        <Icon name='ios-bookmarks' color={tintColor} size={18} />
    )}
  },
  booking: { screen: booking,
  navigationOptions:{
    tabBarLabel: 'Booking',
    tabBarIcon: ({tintColor})=>(
        <Icon name='ios-home' color={tintColor} size={18} />
    )}
  },
profile: { screen: profile,
navigationOptions:{
  tabBarLabel: 'Profile',
  tabBarIcon: ({tintColor})=>(
      <Icon name='ios-person' color={tintColor} size={18} />
  )}
  }
},
{
  initialRouteName: 'booking',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions:{
    labelStyle:{
      fontSize: 10,
    },
    tabStyle:{
      height: 55,
    },
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    style:{
      backgroundColor:'#0088ff'
    },
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#0088ff',
    }
  }
})

const LoginStack = createStackNavigator({
  login: { screen : login},
  signup: { screen : signup}
})

const Stack = createStackNavigator({
  login: { screen: login},
  signup: {screen: signup},
  booking: { screen: BookingTab },
  settings: { screen: settings},
  help: {screen: help},
  privacy: {screen: privacy},
},
{
  navigationOptions: {
    header:null
  }
})

export default class App extends React.Component {
  render() {
    return(
        <Stack />
    )
  }
}
