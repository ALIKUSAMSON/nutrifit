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
export default class vitamins extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >
      <View style={styles.container}>
      <Text style={styles.header}>Vitamins </Text>
      <Text style={styles.section}> These are needed for metabolic purposes and for good health. They are divided into many which include:</Text>
      <Text style={styles.subheader}>Vitamin A</Text>
      <Text style={styles.section}>Found in; fish liver oil, carrots, red pepper, mangoes, diary product and green vegetables and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>   
       • It helps us see in dim light (constituents visual pigments)
    • Helps in the maintenance of epithelial tissues</Text>
      <Text style={styles.subheader}>If lacked, leads to night blindness and if extremely lacked can lead to total blindness.</Text>
      <Text style={styles.subheader}>Vitamin B1 (Thiamine)</Text>
      <Text style={styles.section}>Found in; whole grains, yeast, legumes, organ meat, cereals and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It helps enzymes in the removal of carbon dioxide.</Text>
      <Text style={styles.subheader}>If lacked, leads to Beri Beri characterized by stomach troubles,
       general muscle weakness in the end the person becomes paralyzed and dies.</Text>
       <Text style={styles.subheader}>Vitamin B2 (Riboflavin)</Text>
      <Text style={styles.section}>Widely distributed in foods</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It is used as a constituent of two enzymes used in energy metabolism.</Text>
      <Text style={styles.subheader}>If lacked, leads to skin and mouth sores, lesions on the eyes and poor growth.</Text>
      <Text style={styles.subheader}>Niacin </Text>
      <Text style={styles.section}>Found in liver, lean meat, grains, legumes, fish and many others</Text>
      <Text style={styles.subheader}>If lacked, leads to pellagra characterized by swollen tongue,
       skin and gastrointestinal lesion (mental and nervous disorders)</Text>
       <Text style={styles.subheader}>Vitamin C</Text>
      <Text style={styles.section}>Found in green vegetables, citrus fruits, tomatoes spinach, green peppers and many others.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It maintains extracellular matrix of connective tissues.</Text>
      <Text style={styles.subheader}>If lacked, leads to scurvy (degeneration of skin, gums, blood vessels)</Text>
      <Text style={styles.subheader}>Vitamin D</Text>
      <Text style={styles.section}>Found in eggs, dairy products, also synthesized by using sunlight.</Text>
      <Text style={styles.subheader}>Functions</Text>
      <Text style={styles.section}>It promotes bone growth, needed by body to absorb calcium salts.</Text>
      <Text style={styles.subheader}>If lacked, leads to Rickets in children.</Text>
      <Text style={styles.subheader}>Vitamin K</Text>
      <Text style={styles.section}>Found in green leafy vegetables, cereals, fruits, meat, spinach and many others</Text>
      <Text style={styles.subheader}>Function </Text>
      <Text style={styles.section}>It is used in blood clotting.</Text>
      <Text style={styles.subheader}>If lacked, leads to severe bleeding and internal hemorrhages.</Text>

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
