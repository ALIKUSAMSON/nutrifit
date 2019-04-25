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
export default class beans extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>BEANS</Text>
      <Text style={styles.section}>
      Beans contain some amounts of proteins and large amounts of iron. 
      Iron is a constituent of hemoglobin in red blood cells.
       Meals full of iron prevent anaemia. 
      </Text>
      <Image
          source={require('../img/beans.jpeg')}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: fonts.lg,
    fontFamily: fonts.secondary,
    fontWeight: 'bold'
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
    fontSize: fonts.md,
  },
});
