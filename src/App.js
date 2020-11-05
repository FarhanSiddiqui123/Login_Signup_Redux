/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {AppContainer} from './navigation/index';
import { Provider } from "react-redux";
import { STORE, PERSISTOR } from "./store/storeConfig";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends Component{ 
 
  render(){
    return (
    <Provider store={STORE}>
      <PersistGate persistor={PERSISTOR}>
        <AppContainer />
      </PersistGate>
    </Provider>
    )
  }
}