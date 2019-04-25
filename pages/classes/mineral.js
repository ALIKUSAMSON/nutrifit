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
export default class mineral extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >
      <View style={styles.container}>
      <Text style={styles.header}>Mineral salts</Text>
      <Text style={styles.subheader}>Calcium</Text>
      <Text style={styles.section}>Found in milk, cheese, fish, dark green vegetables dried legumes and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>Helps in bone and teeth formation, blood clotting and nerve transmission.</Text>
      <Text style={styles.subheader}>If lacked, leads to stunted growth, Rickets, osteoporosis, convulsions.</Text>
      <Text style={styles.subheader}>Sodium</Text>
      <Text style={styles.section}>Mostly found in common salt.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>    
      • Helps in nerve transmissions in the body, contraction and expansion of muscles.
    • Aids body in water balance.</Text>
      <Text style={styles.subheader}>Iron </Text>
      <Text style={styles.section}>Found in eggs, meat, legumes, whole grains, green leafy vegetables and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used in formation of hemoglobin in blood which transports oxygen.</Text>
      <Text style={styles.subheader}>If lacked, it leads to anemia.</Text>
      <Text style={styles.subheader}>Iodine </Text>
      <Text style={styles.section}>Found in marine fish, drinking water, sea foods, shell fish, dairy products.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used in production of thyroxin hormone.</Text>
      <Text style={styles.subheader}>If lacked, it leads to goiter</Text>
      <Text style={styles.subheader}>Potassium</Text>
      <Text style={styles.section}>Found in meat, milk, bananas and many other fruits.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used in body-water function, nerve function and acid-base balance in the body.</Text>
      <Text style={styles.subheader}>If lacked, it leads to muscular weakness paralysis.</Text>
      <Text style={styles.subheader}>Fluorine </Text>
      <Text style={styles.section}>Found in drinking water, tea, seafood and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used in toothpaste to prevent tooth decay.</Text>

    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  contentContainer: {
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: '#F5FCFF',
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
