import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

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
export default class fats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Fats and lipids</Text>
      <Text style={styles.section}>Found in margarine, butter, yoghurt and many others.</Text>
      <Text style={styles.subheader}>Function </Text>
      <Text style={styles.section}>    
      • It is used in production of energy (oxidation of 1g of fat liberates about 9.5 kcal of energy)
    • It is used to provide warmth in the body.
    </Text>
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
  subheader: {
    backgroundColor: 'transparent',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
});
