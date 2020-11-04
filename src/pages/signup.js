import React,{Component} from 'react';
import styles from "../styles/signup-styles";
import {Keyboard, KeyboardAvoidingView, 
  SafeAreaView, Text, TextInput,TouchableOpacity, 
  TouchableWithoutFeedback,View} from "react-native";

class signUp extends Component{
  constructor(props){
    
    super(props);
    this.state={
        name:'',
        password:'',
        confrimPassword:'',
        username:'',
    } 
    
}

signUp=async()=>{
  
    alert('Singup Pressed..')
  
}
    render()
    {
     return(
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                  <View style={styles.container}>
                      <Text style={styles.title}>
                          Signup Details
                      </Text>
                      <View style={styles.infoContainer}>
                          <TextInput style={styles.input}
                              placeholder='Name'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}                      
                              onChangeText={(name) => this.setState({name})}
                              value={this.state.name}
                         />
                          <TextInput style={styles.input}
                              placeholder='Password'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}
                              autoCapitalize="none"
                              secureTextEntry
                              ref={"txtPassword"}
                              onChangeText={(password) => this.setState({password})}
                              value={this.state.password}
                          />
                          <TextInput style={styles.input}
                              placeholder='Confirm Password'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}
                              autoCapitalize="none"
                              secureTextEntry
                              ref={"txtPassword"}
                              onChangeText={(confrimPassword) => this.setState({confrimPassword})}
                              value={this.state.confrimPassword}
                          />
                           <TextInput style={styles.input}
                              placeholder='Email/Username'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              keyboardType='email-address'
                              autoCorrect={false}
                              autoCapitalize="none"
                              onChangeText={(username) => this.setState({username})}
                              value={this.state.username}
                         />
                          <TouchableOpacity style={styles.buttonContainer} onPress={this.signUp} >
                              <Text style={styles.buttonText}>
                                  SIGNUP
                              </Text>
                              </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

  </SafeAreaView>
)
    
    }
  }

  
  export default signUp;