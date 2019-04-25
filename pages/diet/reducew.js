import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 

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
export default class reducew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Food', 'Calories', 'Carbohydrates (mg)', 'Protein (mg)','Fat (mg)'],
      tableTitle: ['Whole wheat bread (2 slices)', 'Raisin bread (1 slice)','Cornflakes (1 serving)', 'Coca cola', 'Pepsi cola', 'Coffee'],
      tableData: [
        ['111.8', '21.9', '4.8','0.0014'],
        ['110.4', '22.4', '4.7','0.0001'],
        ['110.3', '24.4', '23','0.0001'],
        ['144', '36', '2.4','0'],
        ['156', '39.6', '2.2','0'],
        ['2', '12.0', '0.2','0'],
  
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >
      <View style={styles.container}>
      <Text style={styles.header}>WEIGHT REDUCTION</Text>
      <Text style={styles.section}>

      A regular person eats around 90 – 150g of fat daily which yields about 1500 calories.
      If you can reduce the amount of calories by 500 calories daily, you can lose 1 pound (0.453592kg) of weight weekly.
      Eat heavy breakfast, light lunch and moderate supper.
      Do not sleep immediately after supper/ dinner but put your body to work through vigorous exercise, reading so as to use up some calories.
      Also eat less and exercise more to expend more calories than you take in. the deficiency is balanced by consuming body fat.
      Also your meal should consist of mainly fruits, vegetables, water, a few carbohydrates, extremely small amounts of protein and no fats at all.
      The following are some of the foods you can consume.

      </Text>
   
    <View style={styles.tablecontainer}>
        <Table>
          <Row data={state.tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[50,50]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  tablecontainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 50,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  row: {  height: 50  },
  text: { textAlign: 'center' },
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
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
});
