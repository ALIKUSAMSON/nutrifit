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
export default class water extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >

      <View style={styles.container}>
      <Text style={styles.header}>WATER</Text>
      <Text style={styles.section}>
      Water is essential for life. It helps in cooling the body,
       refreshing the mind and rehydrating the body. Water is also used to
        maintain a healthy skin. A glass of water at room temperature is recommended 
        early in the morning after waking up. Lack of water leads to convulsions, 
        constipation, paralysis, sore skin, wilting of muscles and many others

      </Text>
      <Image
          source={require('../img/water.jpeg')}/>
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
