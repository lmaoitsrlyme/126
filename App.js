import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpoCamera from './camera';


export default class App extends React.Component{
  render(){
    return(
      <ExpoCamera
      
      />
    )
  }
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//stolen code <3