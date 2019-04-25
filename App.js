import React from 'react';import {

  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SplashScreen from './pages/SplashScreen';
import AppNavigator from './pages/AppNavigator';





const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
 App: AppNavigator,
  



});


export default createAppContainer(InitialNavigator);