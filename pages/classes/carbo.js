import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';

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
export default class carbo extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >

      <View style={styles.container}>
      <Text style={styles.header}>Carbohydrates</Text>
      <Text style={styles.section}>It’s broken down into three:</Text>
      <Text style={styles.subheader}>Sugar (found in cakes, biscuits, toffee, etc)</Text>
      <Text style={styles.section}>
      Sugar can also be in different forms:
    • Fructose/glucose: This is in milk.
    • Lactose: This is sugar in milk.
    • Sucrose: Ordinary table sugar from sugarcanes/sugar beets.
      </Text>
      <Text style={styles.subheader}>Starch</Text>
      <Text style={styles.section}>Found in bread, potatoes, cereals and many other plant foods.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used to produce energy in the body.</Text>
      <Text style={styles.subheader}>Cellulose</Text>
      <Text style={styles.section}>This is more relevant to plants though can be used as roughages in humans.</Text>
      <Text style={styles.subheader}>If carbohydrates are lacked, one may suffer from marasmus.</Text>

    </View>
    </ScrollView>
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
  contentContainer: {
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: '#F5FCFF',
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
