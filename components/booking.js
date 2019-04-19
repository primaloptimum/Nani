import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity, View, Button, Picker, CheckBox} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {SegmentedControls} from 'react-native-radio-buttons'

class booking extends Component{
  state = { username: '', password: '', checked: false}

  static navigationOptions= {
    header:null
  }

  renderMap(){

  }

  render(){
    const options = [
      "Clean",
      "Tutor"
    ];

    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    }
    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold'} : {};

      return (
          <TouchableOpacity onPress={onSelect} key={index}>
            <Text style={style}>{option}</Text>
          </TouchableOpacity>
        );
    }

    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }
    const { MainContainer, centerView, TextInputStyle, bottomView, link, textStyle, contentStyle} = styles
    const newline = <Text>{'\n'}</Text>
    return(
      <KeyboardAvoidingView style = {MainContainer}>
        <KeyboardAvoidingView style = {centerView}>
          <KeyboardAvoidingView>
            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Location:</Text>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style = {contentStyle}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('login')}>
              <View style={{backgroundColor: 'white', width: 200, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 40}}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#00aaff'}}>Current Location</Text>
              </View>
            </TouchableOpacity>
            <Text>  </Text>
            <TouchableOpacity onPress = {this.renderMap.bind(this)}>
              <View style={{backgroundColor: 'white', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 40}}>
                <Icon name='ios-pin' color='#00aaff' size={18} />
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Age Range:</Text>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style = {contentStyle}>
            <Text style = {{fontSize: 17, fontWeight: 'bold', color: 'white'}}>From: </Text>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 20, width: 100, backgroundColor: 'white', borderRadius: 30}}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
              mode='dropdown'>
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
            <Text>               </Text><Text style = {{fontSize: 17, fontWeight: 'bold', color: 'white'}}> To: </Text>
            <Picker
              selectedValue={this.state.language2}
              style={{ height: 20, width: 100, backgroundColor: 'white', borderRadius: 30}}
              onValueChange={(itemValue2, itemIndex2) => this.setState({language2: itemValue2})}
              mode='dropdown'>
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style = {contentStyle}>
            <Text>               </Text><Text style = {{fontSize: 17, fontWeight: 'bold', color: 'white'}}> No. of kids: </Text>
            <Picker
              selectedValue={this.state.language2}
              style={{ height: 20, width: 100, backgroundColor: 'white', borderRadius: 30}}
              onValueChange={(itemValue2, itemIndex2) => this.setState({language2: itemValue2})}
              mode='dropdown'>
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style = {contentStyle}>
            <Text style = {{fontSize: 10, fontWeight: 'bold', color: 'white'}}>Tutoring: </Text>
            <SegmentedControls
              tint={'white'}
              selectedTint= {'white'}
              backTint= {'#00aaff'}
              options={ options }
              paddingTop={1}
              paddingBottom= {1}
              separatorWidth={1}
              allowFontScaling={ false } // default: true
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={ this.state.selectedOption }
              optionContainerStyle={{flex:1, width:2}}
            />

          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default booking
