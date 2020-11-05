import * as TYPES from "../../types";


const existUser = () => {
    return {
      type: TYPES.ALREADY_USER,
     
    };
  };
  export const addUserAction = (params) => {
    return {
      type:TYPES.ADD_USER,
      payload:{
        Name:params.Name,
        Password:params.Password,
        Username:params.Username,
      }
    };
  };
  
  export const alreadyUser = () => {
    return (dispatch) => {
      dispatch(existUser());
     this.props.navigation.navigate('Login');
    };
  };