import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  
import Classes from '../Classes';
import carbo from './carbo'
import fats from './fats'
import mineral from './mineral'
import protein from './protein'
import vitamins from './vitamins'
import water from './water'
import roughages from './roughages'
  
  const WelcomeActivity_StackNavigator = createStackNavigator({
    //All the screens will be indexed here
    Classes:{screen:Classes,
      navigationOptions:({
        title: 'CLASSES',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    carbo: {screen: carbo,
      navigationOptions:({
        title: 'Carbohydrates',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    fats: {screen: fats,
      navigationOptions:({
        title: 'FATS AND LIPIDS',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    mineral: {screen: mineral,
      navigationOptions:({
        title: 'Mineral Salts',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    protein: {screen: protein,
        navigationOptions:({
          title: 'Proteins',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      roughages: {screen: roughages,
        navigationOptions:({
          title: 'Roughages',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      vitamins: {screen: vitamins,
        navigationOptions:({
          title: 'Vitamins',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      water: {screen: water,
        navigationOptions:({
          title: 'Water',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },

  
      });
  
  
  export default createAppContainer(WelcomeActivity_StackNavigator);