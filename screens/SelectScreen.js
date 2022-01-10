//This is an example code to get Geolocation//
import React from 'react';
//import react in our code.
import {
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Picker,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

export default class App extends React.Component {
  state = {
    currentLongitude: 'unknown', //Initial Longitude
    currentLatitude: 'unknown',
    dataSource: [],
    dataSource1: [],
    dataSource2:[],
    Latitude: '',
    Longitude: '',
  };
  categorychange(itemValue){
    if(itemValue!=undefined)
    {
    var filtered = this.state.dataSource1.filter(m=>m.CategoryId==itemValue);
    console.log(filtered);
    this.state.dataSource2=filtered;
        }
    }
  

  Insert_Data_Into_MySQL = () => {
  if(this.state.PickerValueHolder2!=undefined){
    fetch('http://202.45.146.174/lumbini/api/inventory/Postinventory', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Latitude: this.state.currentLatitude,
        Longitude: this.state.currentLongitude,
        Attitude: this.state.Attitude,
        id: this.state.PickerValueHolder2,
      }),
    })
      .then(responseJsonFromServer => {
        if(responseJsonFromServer.status==200){
        Alert.alert("Success");
        }
        else{
          Alert.alert("Error in server");

        }
      })
      .catch(error => {
        console.error(error);
      });
 
 
 
 
    }
    else{
      Alert.alert("please select inventry name ");
    }
    };

  componentDidMount = () => {
    fetch('http://202.45.146.174/Lumbini/api/category')
    .then(response => response.json())
    .then(responseJsonFromServer => {
      this.setState({
        isLoading: false,
        dataSource: responseJsonFromServer,
      });
    })
    .catch(error => {
      console.error(error);
    });
    fetch('http://202.45.146.174/Lumbini/api/Inventory')
      .then(response => response.json())
      .then(responseJsonFromServer => {
        this.setState({
          isLoading: false,
          dataSource1: responseJsonFromServer,
        });
      })
      .catch(error => {
        console.error(error);
      });
    
    var that = this;

    if (Platform.OS === 'ios') {
      this.callLocation(that);
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.callLocation(that);
          } else {
            alert('Permission Denied');
          }
        } catch (err) {
         alert('err', err);
          console.warn(err);
        }
      }
      requestLocationPermission();
    }
  };

  callLocation(that) {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);

        const currentLatitude = JSON.stringify(position.coords.latitude);

        const currentAttitude = JSON.stringify(position.coords.altitude);

        that.setState({currentLongitude: currentLongitude});

        that.setState({currentLatitude: currentLatitude});

        that.setState({Attitude: currentAttitude});
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    that.watchID = Geolocation.watchPosition(position => {
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);

      const currentLatitude = JSON.stringify(position.coords.latitude);

      that.setState({currentLongitude: currentLongitude});

      that.setState({currentLatitude: currentLatitude});
    });
  }
  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  };
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.PickerValueHolder}
          style={{height: 50, width: '80%', alignSelf: 'center', marginTop: 15}}
          onValueChange={(itemValue) =>{
            this.setState({PickerValueHolder: itemValue});
            this.categorychange(itemValue);
          }
          }>
          <Picker.Item label="Select Category Name" value="Name" />
          {
          this.state.dataSource.map((item, key) => (
            <Picker.Item label={item.CategoryName} value={item.Id} key={key} /> //onchange=>{abc(Item.id)}/>
          
          ))}
        </Picker>
        
        <Picker
          selectedValue={this.state.PickerValueHolder2}
          style={{height: 50, width: '80%', alignSelf: 'center', marginTop: 15}}
          onValueChange={(itemValue) =>{
            this.setState({PickerValueHolder2: itemValue});
          }
          }>
          <Picker.Item label="Select Inventory Name" value="Name" />
          {
          this.state.dataSource2.map((item, key) => (
            <Picker.Item label={item.Name} value={item.Id} key={key} /> //onchange=>{abc(Item.id)}/>
          
          ))}
        </Picker>
        
        
        
        
        <TextInput
          placeholder="Latitude"
          value={this.state.currentLatitude}
          onChangeText={TextInputText =>
            this.setState({Latitude: TextInputText})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Longitude"
          value={this.state.currentLongitude}
          onChangeText={TextInputText =>
            this.setState({Longitude: TextInputText})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
       
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.Insert_Data_Into_MySQL}>
          <View style={{...styles.button, ...this.props.style}}>
            <Text style={{...styles.buttonText, ...this.props.textStyling}}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Button title="Submit" onPress={this.Insert_Data_Into_MySQL} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
    padding: 16,
    backgroundColor: '#fff',
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  TextStyle: {
    color: 'red',
    textAlign: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 7,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF5722',
  },
  button: {
    backgroundColor: 'darkorange',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
  },
});
