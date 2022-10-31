import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function App() {
  return (
   <View style={{backgroundColor:'white', flex:1, flexDirection: 'column', paddingLeft: 40, paddingRight: 60}}>

    <Text style={{paddingTop:60,fontSize:18,fontWeight:'700'}}>SIGN UP</Text>
    <Text style={{paddingTop:25}}>Email</Text>
    <TextInput style={{borderWidth:0.9,width:250,borderRadius:6,paddingLeft:5}} placeholder='E-mail'></TextInput>
    <Text style={{paddingTop:12,marginBottom:20}}>Password</Text>
    <TextInput style={{marginBottom:12,borderWidth:0.9,width:250,borderRadius:6,paddingLeft:5}} placeholder='Password'></TextInput>

    <TouchableOpacity
    style={{borderwidth:1,borderRadius:15,elevation:15,borderColor:'transparent', alignSelf: 'center',
      height:50,width:300,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
      <Text style={{alignItems:'center', color:'white', fontSize:15,fontWeight:'600'}}>SIGN UP</Text>
      </TouchableOpacity>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginTop: 20}}>
    <View style={{width:120,height:1,backgroundColor:'black'}}></View>
    <Text style={{borderWidth:1,borderRadius:5,width:30,height:30,fontSize:18,textAlign:'center',textAlignVertical:'center'}}>OR</Text>
    <View style={{width:120,height:1,backgroundColor:'black'}}></View>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-evenly', margin: 15}}>
      <View style={{ borderRadius: 30, borderWidth: 2, borderColor: 'blue', width: 50, height: 50,
    justifyContent: 'center', alignItems: 'center'}}>
    <FontAwesome5 name='facebook' size={30} color={'blue'}/></View>

    <View style={{ borderRadius: 30,  borderWidth: 2, borderColor: 'red', width: 50, height: 50,
    justifyContent: 'center', alignItems: 'center'}}>
    <FontAwesome5 name='google' size={30} color={'red'}/></View>

    <View style={{borderRadius: 30, borderWidth: 2, borderColor: 'blue', width: 50, height: 50,
    justifyContent: 'center', alignItems: 'center'}}>
    <FontAwesome5 name='linkedin' size={30} color={'blue'}/></View>

    </View>

    <Text style={{padingTop:20, fontSize: 18, fontWidth: 500, alignSelf: 'center'}}>Already a user? 
    <Text style={{textDecorationLine:'underline', marginEnd: 8}}>LOGIN</Text></Text>
    
   </View> 
      
  );
  

  }
