import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import energyb from './diet/energyb'
import healthl from './diet/healthl'
import reducew from './diet/reducew'

var width = Dimensions.get('window').width

export default class Diet extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >
      <View style={styles.container}>
     
      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('reducew')}>
        <Text style={styles.text} >Reduce weight</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('energyb')}>
        <Text style={styles.text}>Energy boost</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('healthl')}>
        <Text style={styles.text}>Health living</Text>
      </TouchableOpacity>

      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  contentContainer: {
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: '#F5FCFF',
  },
  box:{
    backgroundColor:'#f78da7',
    height:70,
    margin:5,
    marginVertical:5,
    marginHorizontal:5,
    paddingHorizontal:5,
    alignSelf: 'stretch',
    width:width/1-10,
  },
  text:{
    color:'white',
    fontSize:25,
    alignSelf:'center'

  },
});
