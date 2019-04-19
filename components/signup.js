import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles'
import login from './login'
import booking from './booking'

class signup extends Component{
  static navigationOptions = {
    header: null,
  };

  state = {
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
    email: '',
    phone: ''
  }

  checkSignUp(){
    const {email, firstName, lastName, password, password2, phoneNo} = this.state
    //console.warn(JSON.stringify({username, password}))
    if (password === password2)
    {
        fetch('http://ggff.us.openode.io/user/signup', {method:'POST', headers: {'Content-Type': 'application/json' }, body:JSON.stringify({email, firstName, lastName, password, phoneNo})}).then(res => {
        return res = res.text()
      }).then(res => {
        let msg = JSON.parse(res)
        if(msg.message == 'Check your emial'){
          this.props.navigation.navigate('booking')
        }
        else{
          Alert.alert('Error', JSON.stringify({email, username, password, phoneNo}), [{
          text: 'ok'
        }])
        }
      }).catch(error => {
        Alert.alert('Error', msg.error, [{
          text: 'ok'
        }])
      })
    }
  }

  render(){
    const {TextInputStyle, centerView, MainContainer, heading, textStyle, filterStyle, bottomView} = styles
    const newline = <Text>{'\n'}</Text>

    let emailtxt = <Text style={textStyle}>Email address:</Text>
    let firstNametxt = <Text style={textStyle}>First Name:</Text>
    let lastNametxt = <Text style={textStyle}>Last Name</Text>
    let passwordtxt = <Text style={textStyle}>Password:</Text>
    let password2txt = <Text style={textStyle}>Confirm Password:</Text>
    let phonenotxt = <Text style={textStyle}>Phone No:</Text>

    return (
      <KeyboardAvoidingView style={MainContainer}>
        <KeyboardAvoidingView style = {centerView} behavior="padding" enabled>
          <Text style={heading}>Sign Up</Text>
          {newline}
          <TextInput style={TextInputStyle} placeholder='  Email address' onChangeText={text => this.setState({email: text})} />
          {newline}
          <TextInput style={TextInputStyle} placeholder='  First Name' onChangeText={text => this.setState({firstName: text})} />
          {newline}
          <TextInput style={TextInputStyle} placeholder='  Last Name' onChangeText={text => this.setState({lastName: text})} />
          {newline}
          <TextInput style={TextInputStyle} secureTextEntry={true} placeholder='  Password' onChangeText={text => this.setState({password: text})} />
          {newline}
          <TextInput style={TextInputStyle} secureTextEntry={true} placeholder='  Confirm Password' onChangeText={text => this.setState({password2: text})} />
          {newline}
          <TextInput style={TextInputStyle} placeholder='  Phone No.' onChangeText={text => this.setState({phoneNo: text})} />

          <TouchableOpacity style = {styles.link} onPress={() => this.checkSignUp()}><Text style={textStyle}>Sign Up</Text></TouchableOpacity>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style = {bottomView}>
        <TouchableOpacity style = {styles.link} onPress={() =>  this.props.navigation.navigate('login')} title='Login'><Text style={textStyle}>Have an account?</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default signup
