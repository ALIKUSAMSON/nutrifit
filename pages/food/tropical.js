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
export default class tropical extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >

      <View style={styles.container}>
      <Text style={styles.header}>TROPICAL FRUITS.</Text>
      <Text style={styles.section}>
      These include bananas, watermelons, dates, fig, jackfruit, mangoes,pineapples and others.
They contain great amounts of water.
They also provide body sugars.
They are also perfect for being eaten after one has spent a long time without eating (breaking fast).
Bananas also contain Potassium (also found in Matooke) which is used in acid – base balance, body water balance and aid nerve function.
Deficiency leads to muscular weakness and paralysis. 

      </Text>
      <Image
          source={require('../img/tropical.jpeg')}/>
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
