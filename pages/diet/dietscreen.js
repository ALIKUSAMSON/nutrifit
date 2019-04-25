import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import energyb from './energyb'
import healthl from './healthl'
import reducew from './reducew'
import Diet from '../Diet';

const WelcomeActivity_StackNavigator = createStackNavigator({
  //All the screens will be indexed here
  Diet:{screen:Diet,
    navigationOptions:({
      title: 'DIET',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  energyb: {screen: energyb,
    navigationOptions:({
      title: 'Energy boost',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  healthl: {screen: healthl,
    navigationOptions:({
      title: 'Health living',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  reducew: {screen: reducew,
    navigationOptions:({
      title: 'Reduce Weight',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },

    });


export default createAppContainer(WelcomeActivity_StackNavigator);