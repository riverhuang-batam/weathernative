import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Weather extends Component{
  minmaxTemp = (min, max) => {
    if(min && max){
    return(
        <Text>
            {min}&deg; {max}&deg;
        </Text>
    )
}
}
  render(){
    return(
      <View>
        <Text style={styles.textColor}>Weather</Text>
    <Text style={styles.textColor}>{this.props.city}, {this.props.country}</Text>
    <Icon name={`${this.props.icon}`} size={200} style={styles.iconColor}/>
    <Text style={styles.textColor}>
    {this.props.temp_celsius ? (<Text>{this.props.temp_celsius}&deg;</Text>) : null}
    </Text>
    <Text style={styles.textColor}>
    {this.minmaxTemp(this.props.temp_min, this.props.temp_max)}
    </Text>
    <Text style={styles.textColor}>{this.props.description}</Text>
    
        <TouchableOpacity style={styles.searchButton}>
          <Text>Search</Text>
          </TouchableOpacity>
          <TextInput placehodler="Search" placeholderTextColor="grey"></TextInput>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    
  },
  searchButton:{
    borderBottomColor:"red"
  },
  searchText:{

  }, 
  iconColor:{
    color:"white",
    textAlign:"center"
  },
  background:{
    backgroundColor:"black",
    
  },
  textColor:{
    color:"white",
    fontSize:45,
    textAlign: 'center',
    marginTop:10
  }
})