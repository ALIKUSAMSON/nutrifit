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
export default class eggs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>EGGS</Text>
      <Text style={styles.section}>
      Eggs are a source of first class proteins thus the best sources.
       They contain a number of vitamins (i.e. D, B2, B12 and H) 
       and mineral salts such as iron and manganese. Eating eggs prevents 
       various diseases like rickets, tongue sores, anaemia and many others. 
       It also helps activate various enzymes.
      </Text>
      <Image
          source={require('../img/eggs.jpeg')}/>
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
