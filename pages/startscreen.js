import React, {Component} from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

var width = Dimensions.get('window').width

export default class startscreen extends React.Component{
  constructor(props) {
    super(props); 
}

  render(){
    return(
  <ScrollView
  vertical={true}
  style={styles.contentContainer}
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={true}
  >
  <View style={styles.container}>
    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('eggs')}>
      <Text style={styles.itemName}>Eggs</Text>
        <Image
          source={require('./img/eggs.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('milk')}  >
      <Text style={styles.itemName}>Milk</Text>
        <Image
          source={require('./img/milk.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('beef')} >
      <Text style={styles.itemName}>Beef</Text>
        <Image
          source={require('./img/beef.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('fish')} >
      <Text style={styles.itemName}>Fish</Text>
        <Image
          source={require('./img/fish.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('beans')} >
      <Text style={styles.itemName}>Beans</Text>
        <Image
          source={require('./img/beans.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('citrus')}  >
      <Text style={styles.itemName}>Citrus</Text>
        <Image
          source={require('./img/citrus.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('posho')} >
      <Text style={styles.itemName}>Posho</Text>
        <Image
          source={require('./img/posho.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('salts')} >
      <Text style={styles.itemName}>Table Salts</Text>
        <Image
          source={require('./img/salts.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('water')} >
      <Text style={styles.itemName}>Water</Text>
        <Image
          source={require('./img/water.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('tropical')} >
      <Text style={styles.itemName}>Tropical Fruits</Text>
        <Image
          source={require('./img/tropical.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('vegetables')} >
      <Text style={styles.itemName}>Vegetables</Text>
        <Image
          source={require('./img/vegetables.jpeg')} style={styles.box}   
          />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('sunlight')} >
      <Text style={styles.itemName}>Sunlight</Text>
        <Image
          source={require('./img/sunlight.jpeg')} style={styles.box}   
          />
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
    backgroundColor:'black',
    height:150,
    margin:2,
    marginVertical:15,
    marginHorizontal:5,
    paddingHorizontal:5,
    alignSelf: 'stretch',
    width:width/3-10
  },
  text:{
    color:'white',
    fontSize:20
  },    
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',

  },

});