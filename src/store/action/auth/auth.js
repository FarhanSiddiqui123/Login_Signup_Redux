import * as TYPES from "../../types";


const logout = () => {
    return {
      type: TYPES.LOGOUT,
      user: null,
    };
  };
  export const loginAction = (params) => {
      return {
        type:TYPES.LOGIN,
        payload:{
          Password:params.Password,
          Username:params.Username,
        }
    };
  };
  
  export const logoutAction = () => {
    return (dispatch) => {
      dispatch(logout());
     this.props.navigation.navigate('Login');
    };
  };