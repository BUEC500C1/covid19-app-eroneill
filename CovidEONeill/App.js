// Erin O'Neill HW7 EC500
// Copyright 2020 erinkate@bu.edu

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default
class App extends React.Component {

    constructor(ourdata){
    super(ourdata);
    this.state = {
      NewConfirmed: '',
      TotalConfirmed:'',
      NewDeaths: '',
      TotalDeaths: '',
      NewRecovered: '',
      TotalRecovered: '',
      CurrentDate: '',
    };
  } 

  componentDidMount() {
    // First grab all the stuff we want from the summary API page
    fetch('https://api.covid19api.com/summary', {method: 'GET'})
      .then((response) => response.json())
      .then(json => {
        this.setState({
          NewConfirmed: json['Global']['NewConfirmed'],
          TotalConfirmed: json['Global']['TotalConfirmed'],
          NewDeaths: json['Global']['NewDeaths'],
          TotalDeaths: json['Global']['TotalDeaths'],
          NewRecovered: json['Global']['NewRecovered'],
          TotalRecovered: json['Global']['TotalRecovered'],
          CurrentDate: json['Date']
        },
        function(){}
      );
      console.log(this.state.jsondata);
      })

  }

  render(){
    return(
      // Now we want to display our data with the different formatting 
      <View style={style.container}>
        <Text style = {style.bigtitle}> Global COVID19 Summary</Text>
        <Text style = {style.datetext}> Data from COVID19api.com</Text>
        <Text style = {style.datetext}> Date: {this.state.CurrentDate}</Text>
        <Text style = {style.text}> New Confirmed Cases:   {this.state.NewConfirmed.toLocaleString()}</Text>
        <Text style = {style.text}> Total Confirmed Cases:    {this.state.TotalConfirmed}</Text>
        <Text style = {style.text}> New Deaths:                          {this.state.NewDeaths}</Text>
        <Text style = {style.text}> Total Deaths:                     {this.state.TotalDeaths}</Text>
        <Text style = {style.text}> New Recovered Cases:     {this.state.NewRecovered}</Text>
        <Text style = {style.text}> Total Recovered Cases:    {this.state.TotalRecovered}</Text>
        <Text style = {style.bottomcovering}>    </Text>

        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'#A9C6F5',    
  },

  bigtitle:{
    marginTop: 50,
    fontSize: 25,
    textAlign: "center",
  },

  datetext:{
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
  },

  text:{
    marginTop: 20,
    marginBottom: 15,
    marginRight: 75,
    marginLeft: 75,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: '#B4CAED',
  },
  bottomcovering:{
    marginBottom: 250,
  }
})