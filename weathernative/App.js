import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'
export default class App extends Component{
  render(){
    return(
      <View>
        <View style={styles.container}></View>
        <Text>test</Text>
        <TouchableOpacity>
          <Text>This is Button</Text>
          <TextInput placehodler="Search" placeholderTextColor="grey"></TextInput>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  searchButton:{

  },
  searchText:{

  }
})