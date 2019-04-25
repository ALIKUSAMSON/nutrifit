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
export default class energyb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Food Class', 'Energy per gram (kl/g)'],
      tableTitle: ['Carbohydrate', 'Fat', 'Protein'],
      tableData: [
        ['17', ],
        ['39', ],
        ['16', ],
      ],

      tableHead1: ['Food', 'Energy per gram (kl/g)'],
      tableTitle1: ['Margarine', 'Butter', 'Peanuts/G.Nuts','Chocalate(milk)', 'cake(Plain)', 'Sugar (white)','Sausages', 'Cornflakes', 'Rice','Bread', 'Eggs',],
      tableData1: [
        ['32.2' ],
        ['31.2' ],
        ['24.5' ],
        ['24.2' ],
        ['18.0' ],
        ['16.5' ],
        ['15.5' ],
        ['15.3' ],
        ['15.0' ],
        ['10.6' ],
        ['6.6' ],
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
      <Text style={styles.header}>ENERGY BOOST</Text>
      <Text style={styles.subheader}>
      The following are the classes of food and the amount of energy they yield per gram;
      </Text>
      <View style={styles.tablecontainer}>
        <Table>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[50,50]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
      <Text style={styles.subheader}>
      The following are some of the examples of food and the energy they give;
      </Text>
      <View style={styles.tablecontainer}>
        <Table>
          <Row data={state.tableHead1} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle1} style={styles.title} heightArr={[50,50]} textStyle={styles.text}/>
            <Rows data={state.tableData1} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
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
    paddingHorizontal: padding.md,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  contentContainer: {
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: '#F5FCFF',
  },
  subheader: {
    backgroundColor: 'transparent',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
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
