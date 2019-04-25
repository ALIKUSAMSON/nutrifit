import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

  import startscreen from '../startscreen';
  import beans from './beans';
  import beef from './beef';
  import citrus from './citrus';
  import eggs from './eggs';
  import fish from './fish';
  import milk from './milk';
  import posho from './posho';
  import salts from './salts';
  import sunlight from './sunlight';
  import tropical from './tropical';
  import vegetables from './vegetables';
  import water from './water';


  const WelcomeActivity_StackNavigator = createStackNavigator({
    //All the screens will be indexed here
    startscreen:{screen:startscreen,
      navigationOptions:({
        title: 'Nutrifit Foods',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    beans: {screen: beans,
      navigationOptions:({
        title: 'Beans',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    beef: {screen: beef,
      navigationOptions:({
        title: 'Chicken and Beef',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
    citrus:{screen:citrus,
        navigationOptions:({
          title: 'Citrus Fruits',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      eggs: {screen: eggs,
        navigationOptions:({
          title: 'Eggs',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      fish: {screen: fish,
        navigationOptions:({
          title: 'Fish',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      milk: {screen: milk,
        navigationOptions:({
          title: 'Milk',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      posho: {screen: posho,
        navigationOptions:({
          title: 'Posho',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      salts:{screen:salts,
        navigationOptions:({
          title: 'Table salts',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      sunlight: {screen: sunlight,
        navigationOptions:({
          title: 'Sunlight',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      tropical: {screen: tropical,
        navigationOptions:({
          title: 'Tropical fruits',
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      vegetables: {screen:vegetables,
        navigationOptions:({
          title: 'Vegetables',
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