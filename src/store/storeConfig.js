import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-community/async-storage";
import auth from "./reducer/auth";
import addUser from "./reducer/addUser";

const rootReducer = combineReducers({
    auth: auth,
    addUser:addUser,
  });
  
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const middleware = applyMiddleware(thunk);
  
  let composeEnhancers = compose;
  
  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  export const STORE = createStore(
    persistedReducer,
    composeEnhancers(middleware)
  );
  export const PERSISTOR = persistStore(STORE);
  