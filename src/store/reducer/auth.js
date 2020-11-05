import * as TYPES from "../types";

const initialState = {
    user: null,
  };
  const reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case TYPES.LOGIN:
        return {
          ...state,
         user:actions.user,
        };
      case TYPES.LOGOUT:
        return {
          ...state,
       
        };
  
      default:
        return state;
    }
  };
  export default reducer;