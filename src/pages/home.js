import React,{Component} from 'react';
import {Text,View,Button } from "react-native"; 

class Home extends Component{
 
  myFunction(){
  this.props.navigation.navigate('Login')
  }
    render()
    {
     return(
       
  <View >
  <Button  onPress={()=>{this.myFunction()}} title="Logout" />
    <Text>Home Page</Text>
  </View>
    )
    }
  }

  
  export default Home;