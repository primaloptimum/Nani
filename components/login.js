import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles'
import signup from './signup'

class login extends Component{
  state = { username: '', password: ''}

  static navigationOptions= {
    header:null
  }

  checkLogin(){
    const {username, password} = this.state
    //console.warn(JSON.stringify({username, password}))
    fetch('http://ggff.us.openode.io/user/login', {method:'POST', headers: {'Content-Type': 'application/json charset=utf-8' } , body:JSON.stringify({username, productImage, name, productDescription})}).then(res => {
      return res = res.text()
    }).then(res => {
      let msg = JSON.parse(res)
      if(msg.message == 'login'){
        this.props.navigation.navigate('booking')
      }
      else{
        Alert.alert('Error', 'Username or Password are incorrect', [{
        text: 'ok'
        }])
      }
    })
  }

  render(){
    const { MainContainer, centerView, TextInputStyle, bottomView, link, textStyle, heading } = styles
    const newline = <Text>{'\n'}</Text>

    return (
      <KeyboardAvoidingView style = {MainContainer}>
        <KeyboardAvoidingView style = {centerView} behavior="padding" enabled>
          <Text style={heading}>Login</Text>
          {newline}
          <TextInput style = {TextInputStyle} underlineColorAndroid="transparent" placeholder = 'Type in your Email or Username' onChangeText={text => this.setState({username: text})}/>
          {newline}
          <TextInput style = {TextInputStyle} underlineColorAndroid="transparent" secureTextEntry={true} placeholder = 'Type in your Password' onChangeText={text => this.setState({password: text})}/>
          <TouchableOpacity style={link} sonPress={() => this.checkLogin()} title='checkLogin'><Text style = {textStyle}>Login</Text></TouchableOpacity>
          {newline}
          <TouchableOpacity style={link} onPress={() => {this.checkLogin()}} title='loginFB'><Text style = {textStyle}>Login with facebook</Text></TouchableOpacity>
          <TouchableOpacity style={link} onPress={() => this.props.navigation.navigate('booking')} title='booking'><Text style = {textStyle}>straight to ordering</Text></TouchableOpacity>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style = {bottomView}>
        <TouchableOpacity style={link} onPress={() => this.props.navigation.navigate('signup')} title='signup'><Text style = {textStyle}>Create a new account</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default login
