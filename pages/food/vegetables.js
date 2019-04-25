import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image,ScrollView } from 'react-native';

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
export default class vegetables extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >

      <View style={styles.container}>
      <Text style={styles.header}>VEGETABLES</Text>
      <Text style={styles.section}>
      These include spinach, cabbage, broccoli, cucumbers
These are a great source of roughages which ease digestion and prevent constipation.
They are also a great source of water.
They contain vitamins such as A (aids vision in dim light), E, K (helps in blood clotting), 
B6, Folic acid (prevents anemia in pregnant women), and vitamin C (prevents scurvy and promotes wound healing).
They also contain mineral salts such as Calcium, Iron, Manganese and Magnesium. 

      </Text>
      <Image
          source={require('../img/vegetables.jpeg')}/>
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
    fontSize: fonts.md,
  },
});
