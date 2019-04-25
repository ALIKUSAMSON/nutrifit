import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
}
export default class fish extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>FISH</Text>
      <Text style={styles.section}>

      Fish is a great source of protein.
    It also contains Omega 3, which helps boost and develop the brain.
    It contains mineral salts like Calcium (aids teeth and bone formation) and iodine (prevents goiter).
    Fish liver oil is also a great source of vitamin A (aids vision in dim light) and vitamin D (prevents rickets). 
      </Text>
      <Image
          source={require('../img/fish.jpeg')}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
    fontSize: fonts.md,
  },
});
