import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import styles from './../styles'

class help extends Component{
  state = { username: '', password: ''}

  static navigationOptions= {
    header:null
  }
  render(){
    const { MainContainer, centerView, TextInputStyle, bottomView, link, textStyle, filterStyle } = styles
    const newline = <Text>{'\n'}</Text>

    return(
      <KeyboardAvoidingView style= {MainContainer}>
        <KeyboardAvoidingView style = {centerView}>
          <TouchableOpacity style = {styles.profileLink} onPress={() => this.props.navigation.navigate('booking')}><Text style={textStyle}>help</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default help
