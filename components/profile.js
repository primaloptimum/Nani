import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import settings from './Profile/settings'
import privacy from './Profile/privacy'
import help from './Profile/help&support'

class profile extends Component{
  state = { username: '', password: ''}

  static navigationOptions= {
    header:null
  }

  render(){
    const { MainContainer, centerView, TextInputStyle, bottomView, link, textStyle, filterStyle } = styles
    const newline = <Text>{'\n'}</Text>

    return(
      <KeyboardAvoidingView style = {MainContainer}>
        <View style = {filterStyle}>
        </View>
        <KeyboardAvoidingView style = {centerView}>
          <TouchableOpacity style = {styles.profileLink} onPress={() => this.props.navigation.navigate('settings')}><Text style={textStyle}>Settings</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.profileLink} onPress={() => this.props.navigation.navigate('privacy')}><Text style={textStyle}>Privacy</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.profileLink} onPress={() => this.props.navigation.navigate('help')}><Text style={textStyle}>Help & Support</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.profileLink} onPress={() => this.props.navigation.navigate('booking')}><Text style={textStyle}>Log Out</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default profile
