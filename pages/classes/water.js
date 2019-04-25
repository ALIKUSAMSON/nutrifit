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
export default class water extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Water </Text>
      <Text style={styles.section}>Water is essential for life. It makes up about 65%-70% of the total body weight.</Text>
      <Text style={styles.subheader}>Function </Text>
      <Text style={styles.section}>
      • It helps in cooling the body and refreshing the mind.
    • It helps in dissolving nutrients in the body.
      </Text>
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
