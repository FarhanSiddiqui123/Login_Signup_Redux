import * as TYPES from "../types";

const initialState = {
    user: null,
  };
  const reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case TYPES.ADD_USER:
        return {
          ...state,
         user:actions.params,
        };
      case TYPES.ALREADY_USER:
        return {
          ...state,
      
        };
  
      default:
        return state;
    }
  };
  export default reducer;