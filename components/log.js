import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import styles from './styles'

class log extends Component{
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
          <Text style = {textStyle}>Logs here</Text>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default log
