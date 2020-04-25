import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Platform} from 'react-native';

export default
class App extends React.Component {
  render() {
    return (
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
      />
      
    );
  }
}