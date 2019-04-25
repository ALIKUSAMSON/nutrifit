import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width

export default class Classes extends React.Component {
  render() {
    return (
      <ScrollView
      vertical={true}
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      >
      <View style={styles.container}>
     
      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('protein')} >
        <Text style={styles.text} >Proteins</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('carbo')}>
        <Text style={styles.text}>carbohydrates</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('vitamins')}>
        <Text style={styles.text}>Vitamins</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('water')} >
        <Text style={styles.text}>Water</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('fats')}>
        <Text style={styles.text}>Fats and Lipids</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('mineral')} >
        <Text style={styles.text}>Mineral salts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('roughages')} >
        <Text style={styles.text}>Roughages</Text>
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
    backgroundColor:'#795548',
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
