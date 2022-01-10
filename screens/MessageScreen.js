import React, {Component} from 'react';
import Boundary, {Events} from 'react-native-boundary';
import {Alert} from 'react-native';
export default class MessageScreen extends Component {
  componentWillMount() {
    Boundary.add({
      lat: 27.684147, 
      lng:85.338930, 
      radius: 500, // in meters
      id: "Lumbini",
    })
      .then(() => console.log("success!"))
      .catch(e => console.error("error :(", e));
   
    Boundary.on(Events.ENTER, id => {
     
      Alert.alert(`Welcome at Lord Buddha Birth place ${id}!!`);
    });
    
    Boundary.on(Events.EXIT, id => {
      
      Alert.alert(`Thanks for visit ${id}!!`)
    })
  }
  
  componentWillUnmount() {
    // Remove the events
    Boundary.off(Events.ENTER)
    Boundary.off(Events.EXIT)

    // Remove the boundary from native API´s
    Boundary.remove('Chipotle')
      .then(() => Alert.alert('Goodbye Lumbini :('))
      .catch(e => Alert.alert('Failed to delete Lumbini :)', e))
  }
}