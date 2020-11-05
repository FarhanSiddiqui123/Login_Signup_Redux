import React,{Component} from 'react';
import styles from "../styles/login-styles";
import {Keyboard, KeyboardAvoidingView, 
    SafeAreaView, Text, TextInput,TouchableOpacity, 
    TouchableWithoutFeedback,View} from "react-native";
import { connect } from "react-redux";
import * as TASKS from '../store/action/index';      


class Login extends Component {

constructor(props){
    
    super(props);
    this.state={
        username:'',
        password:'',
    } 
    
}

loginFunc(params){
    mapDispatchToProps(params);
    //this.props.navigation.navigate('app')
}
signupFunc(){
    this.props.navigation.navigate('signupScreen')

}
  render() {
      return (
          <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView behavior='padding' style={styles.container}>
                  <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                      <View style={styles.container}>
                          <View style={styles.container}>
                              <Text style={styles.title}>
                                  LOGIN INFO
                              </Text>
                              <View style={styles.infoContainer}>
                                  <TextInput style={styles.input}
                                      placeholder='Username/Email'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      keyboardType='email-address'
                                      //returnKeyType='next'
                                      autoCorrect={false}
                                      autoCapitalize="none"
                                      //onSubmitEditing={()=>this.refs.txtPassword.focus()}
                                      onChangeText={(username) => this.setState({username})}
                                      value={this.state.username}
                                 />
                                  <TextInput style={styles.input}
                                      placeholder='Password'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      //returnKeyType='go'
                                      autoCorrect={false}
                                      autoCapitalize="none"
                                      secureTextEntry
                                      ref={"txtPassword"}
                                      onChangeText={(password) => this.setState({password})}
                                      value={this.state.password}
                                  />
                                  <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.loginFunc(this.state)}}>
                                      <Text style={styles.buttonText}>
                                          LOGIN
                                      </Text>
                                      </TouchableOpacity>
                                 <TouchableOpacity style={styles.signUpbuttonContainer } onPress={()=>{this.signupFunc()}} >
                                      <Text style={styles.buttonText}>
                                          SignUp
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
      Password:state.password,
      Userename:state.username,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
       login:(params) => dispatch(TASKS.loginAction(params)),
    };
  };
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);