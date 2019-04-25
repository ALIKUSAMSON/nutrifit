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
export default class healthl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Age group', 'Protein(g)','Calcium(mg)','iron(mg)','Vitamin A(mg)','Vitamin C '],
      tableTitle: ['0-3 months', '4-6 months', '7-9 months','10-12 months','1-3 years','4-6 years','7-10 yers'],
      tableData: [
        ['12.5','525','1.7','0.35','25' ],
        ['12.7','525','4.3','0.35','25' ],
        ['13.7','525','7.8','0.35','25' ],
        ['14.9','525','7.8','0.35','25' ],
        ['14.5','350','6.9','0.4','30' ],
        ['19.7','450','6.1','0.5','30' ],
        ['28.3','550','8.7','0.5','30' ],
      ],

      tableHead1: ['Age group', 'Protein(g)','Calcium(mg)','iron(mg)','Vitamin A(mg)','Vitamin C '],
      tableTitle1: ['11-14 years', '15-18 years', '19-50 years','Above 50 years'],
      tableData1: [
        ['42.1','1000','11.3','0.6','35' ],
        ['55.2','1000','11.3','0.7','40' ],
        ['55.5','700','8.7','0.7','40' ],
        ['53.3','700','8.7','0.7','40' ],

  

      ],
      tableHead2: ['Age group', 'Protein(g)','Calcium(mg)','iron(mg)','Vitamin A(mg)','Vitamin C '],
      tableTitle2: ['11-14 years', '15-18 years', '19-50 years','Above 50 years'],
      tableData2: [
        ['41.2','800','14.8','0.6','35' ],
        ['45.0','800','14.8','0.6','40' ],
        ['45.0','700','14.8','0.6','40' ],
        ['46.5','700','8.7','0.6','40' ],

      ],
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
      <Text style={styles.header}>HEALTH LIVING</Text>
      <Text style={styles.section}>
      These are some of the recommended foods in their recommended amounts for the various age groups;
      For children below 11years,
      </Text>
      <Text style={styles.subheader}>
      For children below 11years,
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
      <Text style={styles.section}>
      For those above 10 years, the different gender groups of the various age groups have different recommended amounts as below:
      </Text>
      <Text style={styles.subheader}>
        FOR MALES
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
      <Text style={styles.subheader}>
        FOR FEMALES
      </Text>
      <View style={styles.tablecontainer}>
        <Table>
          <Row data={state.tableHead2} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle2} style={styles.title} heightArr={[50,50]} textStyle={styles.text}/>
            <Rows data={state.tableData2} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
  
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tablecontainer: { flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff' },
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
