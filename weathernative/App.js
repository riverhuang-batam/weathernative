import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Weather from './weather/weather'


const APP_KEY = "a3f2c7562b598ae7b40695428f22a80e";

export default class App extends Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country: undefined,
      icon:undefined,
      temp_celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: undefined,
      error:false
    };
    this.weatherIcon={
      ThunderStorm:"weather-lightning",
      Drizzle:"weather-cloudy",
      Rain:"weather-lightning-rainy",
      Snow:"weather-snowy",
      Atmosphere:"weather-fog",
      Clear:"weather-sunny",
      Clouds:"weather-cloudy"

    }
  
    this.getWeather();
  }
  
  getWeather = async (e) =>{
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_KEY}`)
    const response = await api_call.json()
    console.log(response)
    // if(city && country){
    //   if(response.cod == 404){

    //   }else{

    //   }
    // }else{

    // }
    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      
      temp_celsius: this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description: response.weather[0].description
      
    })
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
  }
  get_WeatherIcon(icons, rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon:this.weatherIcon.ThunderStorm});
        break;
        case rangeID >= 300 && rangeID <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
        case rangeID >= 500 && rangeID <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
        case rangeID >= 600 && rangeID <= 621:
        this.setState({icon:this.weatherIcon.Snow});
        break;
        case rangeID >= 700 && rangeID <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        case rangeID === 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
        case rangeID >= 800 && rangeID <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        default:
          this.setState({icon:this.weatherIcon.Clouds})
    }
  }
calCelsius(temp){
    let cels = Math.floor(temp - 273.15)
    return cels
  }
  render(){
    return(
      
    <LinearGradient colors={["#000066","#ff99ff"]} style={{flex:1}} >
        <Weather 
        city={this.state.city} 
        country={this.state.country}
        icon={this.state.icon}
        temp_celsius={this.state.temp_celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description= {this.state.description}
        />
      </LinearGradient>
      
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
  
  textColor:{
    color:"rgb(255, 255, 255)",
    fontSize:45,
    textAlign: 'center',
    marginTop:10
  }
})