import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  MainContainer :{
    flex: 1
  },
  heading:{
  fontSize: 25,
  textAlign: 'center',
  color: 'white'
  },
  centerView :{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aaff',
    flex:4
  },
  contentStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aaff',
    height:80,
    flexDirection: 'row'

  },
  TextInputStyle:{
    textAlign: 'center',
    height: 40,
    width: 300,
    borderWidth: 2,
    borderColor: '#00aaff',
    borderRadius: 20,
    backgroundColor : "#ffffff",
 },
 filterButton:{
   borderWidth:0,
   borderColor:'rgba(0,0,0,0.2)',
   alignItems:'center',
   justifyContent:'center',
   width:400,
   height:20,
   backgroundColor:'#00aaff',
   borderRadius:100,
},
 link:{
  padding: 20,
  borderBottomWidth: 0,
  borderBottomColor: "#ddd",
},
profileLink:{
 padding: 20,
 borderBottomWidth: 1,
 marginBottom: 10,
 borderBottomColor: "#ddd",
 marginLeft: 10,
 marginRight: 10
},
touchStyle:{
  width:200,
  height: 40,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  alignItems: 'center'
},
bottomView:{
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#00aaff',
  height: 50
},
textStyle:{
  color: 'white'
},
})
