import React,{Component} from 'react';
import styles from "../styles/signup-styles";
import {Keyboard, KeyboardAvoidingView, 
  SafeAreaView, Text, TextInput,TouchableOpacity, 
  TouchableWithoutFeedback,View} from "react-native";
import { connect } from "react-redux";
import * as TASKS from '../store/action/index';  

class signUp extends Component{
  constructor(props){
    
    super(props);
    this.state={
      
           name:'',
           password:'',
           confrimPassword:'',
           username:'',
 
        nameErr:'',
        passErr:'',
        matchPass:'',
        usernameErr:'',
    }   
}
nameValidator(){
    if(this.state.name === ''){
        this.setState({nameErr:'Enter Name'})
        }
        else{
        this.setState({nameErr:''})
        }
}
passValidator(){
    if(this.state.password === ''){
        this.setState({passErr:'Enter Password'})
        }
        else{
        this.setState({passErr:''})
        }
}

confirmPassValidator(){
if(this.state.password !== this.state.confrimPassword){
this.setState({matchPass:'Password is not match'})
}
else{
this.setState({matchPass:''})
}
}
usernameValidator(){
    if(this.state.username === ''){
        this.setState({usernameErr:'Enter Userename'})
        }
        else{
        this.setState({usernameErr:''})
        }
}

signUp(params){
  if(this.state.nameErr === '' && this.state.passErr === '' && this.state.matchPass === '' && this.state.usernameErr === '')
   { //alert('Singup Pressed..')
   mapDispatchToProps(params);
}
else
{
alert('Fill Form Correctly')
}
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
                      <Text style={{color:'red'}}>{this.state.nameErr}</Text>
                         <TextInput style={styles.input}
                              placeholder='Name'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}                      
                              onChangeText={(name) => this.setState({name})}
                              value={this.state.name}                             
                              onBlur={()=>this.nameValidator()}
                         />
                          <Text style={{color:'red'}}>{this.state.passErr}</Text>
                            <TextInput style={styles.input}
                              placeholder='Password'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}
                              autoCapitalize="none"
                              secureTextEntry
                              ref={"txtPassword"}
                              onChangeText={(password) => this.setState({password})}
                              value={this.state.password}
                              onBlur={()=>this.passValidator()}
                          />
                       <Text style={{color:'red'}}>{this.state.matchPass}</Text>
                            <TextInput style={styles.input}
                              placeholder='Confirm Password'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              autoCorrect={false}
                              autoCapitalize="none"
                              secureTextEntry
                              ref={"txtPassword"}
                              onChangeText={(confrimPassword) => this.setState({confrimPassword})}
                              value={this.state.confrimPassword}
                              onBlur={()=>this.confirmPassValidator()}
                          />
                        <Text style={{color:'red'}}>{this.state.usernameErr}</Text>
                          <TextInput style={styles.input}
                              placeholder='Email/Username'
                              placeholderTextColor='rgba(255,255,255,0.8)'
                              keyboardType='email-address'
                              autoCorrect={false}
                              autoCapitalize="none"
                              onChangeText={(username) => this.setState({username})}
                              value={this.state.username}
                              onBlur={()=>this.usernameValidator()}
                         />
                          <TouchableOpacity style={styles.buttonContainer} onPress={this.signUp(this.state)} >
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
const mapStateToProps = (state) => {
    return {
      Name:state.name,
      Password:state.password,
      Userename:state.username,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
       signup:(params) => dispatch(TASKS.addUserAction(params)),
    };
  };
  
  
export default connect(mapStateToProps,mapDispatchToProps)(signUp);