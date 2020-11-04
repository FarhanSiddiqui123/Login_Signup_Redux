import { createSwitchNavigator,createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import login from "../pages/login";
import home from "../pages/home";
import signup from '../pages/signup';

/*const loginStack = createStackNavigator({
Login: login
});
 */
  const homeStack = createStackNavigator({
    Home: home,
  });
 
  /*const singupStack = createStackNavigator({
    Signup: signup,
   
  });*/
  const Auth = createStackNavigator({
    LoginScreen: {
      screen: login,
      navigationOptions: {
        headerShown: false,
      },
    },
    signupScreen: {
      screen: signup,
      navigationOptions: {
        //headerShown: false,
        title: 'Signup',
       /* headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
    */},
    },
  });
 var SwitNav = createSwitchNavigator({
   Login: Auth,
   app: homeStack,
  });
 

  export var AppContainer = createAppContainer(SwitNav);

 
