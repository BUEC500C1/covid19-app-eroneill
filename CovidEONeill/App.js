// Erin O'Neill HW7 EC500
// Copyright 2020 erinkate@bu.edu

import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Callout from 'react-native-maps';


export default
class App extends React.Component {

    constructor(props){
    super(props);
    this.state = {
      USTotalConfirmed:'',
      USTotalDeaths: '',
      USTotalRecovered: '',
      CurrentDate: '',
    };
  } 

  componentDidMount() {
    // First grab all the stuff we want from the summary API page
    fetch('https://api.covid19api.com/summary', {method: 'GET'})
      .then((response) => response.json())
      .then(json => {
        this.setState({
          USTotalConfirmed: json['Countries'][235]['TotalConfirmed'],
          USTotalDeaths: json['Countries'][235]['TotalDeaths'],
          USTotalRecovered: json['Countries'][235]['TotalRecovered'],
          CurrentDate: json['Date']
        },
        function(){}
      );
      console.log(this.state.jsondata);
      })

  }

  render(){
    return(
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        latitude: 42.3967,
        longitude: -71.1223,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
        }}
      >
      <MapView.Marker
            coordinate={{latitude: 42,
            longitude: -71}}>
              <Callout>
              <Text style = {style.bigtitle}>  Country: United States</Text>
              <Text style = {style.text}>Total Confirmed Cases: {this.state.USTotalConfirmed}</Text>
              <Text style = {style.text}>Total Death Cases: {this.state.USTotalDeaths}</Text>
              
              </Callout>
      </MapView.Marker>

      </MapView>
      );
      }
   }

const style = StyleSheet.create({
  container: {
    backgroundColor:'#A9C6F5',
    alignItems: 'center',    
  },

  bigtitle:{
    marginTop: 50,
    fontSize: 25,
    textAlign: "center",
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  datetext:{
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
  },

  text:{
    marginTop: 20,
    marginBottom: 10,
    marginRight: 75,
    marginLeft: 75,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: '#B4CAED',
  },
});
