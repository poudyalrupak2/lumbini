import React, { Component, useEffect, useState  } from "react";
import { StyleSheet,PermissionsAndroid, View,Text,TouchableHighlight, TouchableOpacity,Image, Platform } from "react-native";
import MapboxGL,{MarkerView} from "@react-native-mapbox-gl/maps";

import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import { Alert } from "react-native";
import { Icon } from 'react-native-elements'

navigator.geolocation = require('@react-native-community/geolocation');


MapboxGL.setAccessToken("pk.eyJ1IjoicG91ZHlhbHJ1cGFrMiIsImEiOiJja2Vhb3RhdnEwMDlxMzFrYnhqYjJrZTV4In0.bT5kCjVY8S6oBD8hO-lcyA");

const accessToken ="pk.eyJ1IjoicG91ZHlhbHJ1cGFrMiIsImEiOiJja2Vhb3RhdnEwMDlxMzFrYnhqYjJrZTV4In0.bT5kCjVY8S6oBD8hO-lcyA";
const directionsClient = MapboxDirectionsFactory({accessToken});
const initstartingPoint = [83.27658165139376, 27.48876358057022];
 const initdestinationPoint = [ 83.26812732871458,27.50596999337273];
 const region = {
  latitude:27.48876358057022,
  longitude: 83.27658165139376,
  latitudeDelta:0.04248814257,
  longitudeDelta: 0.01647949192,
}



 export default App = () => {
  

  const [route, setRoute] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
const[mapdata,setMapdata]=useState(null);
  const [startingPoint,setStartingPoint] =useState(initstartingPoint);
  const [destinationPoint,setdestinationpoint] =useState(null);

  useEffect(() => {
    const permission =  MapboxGL.requestAndroidLocationPermissions();

      // if(destinationPoint!=null){ 
      //        fetchRoute();
      //     }
//     PermissionsAndroid.requestMultiple(
//       [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
//       {
//           title: 'Give Location Permission',
//       message: 'App needs location permission to find your position.'
//   }
// ).then(granted => {
//   console.log(granted);
// }).catch(err => {
//   console.warn(err);
// });
    getLocation();

      fetch('http://202.45.146.174/Lumbini/api/Inventory')
    .then(response => response.json())
    .then(responseJsonFromServer => {
      var keys_to_keep = ['Longitude', 'Latitude','Name']

     let  locations=responseJsonFromServer.map(element => Object.assign({}, ...keys_to_keep.map(key => ({[key]: element[key]}))))
     
      setMapdata(locations.filter(x=>x.Longitude !=null && x.Latitude !=null &&x.Latitude!="unknown"&&x.Longitude!="unknown"));

    })
  .catch(error => {
    console.error(error);
  });


  })
  const getLocation=async()=>{
    try{
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = JSON.stringify(position);
            //console.log("location is"+location);
             setLatitude(position.coords.latitude),
             setLongitude(position.coords.longitude)   
             setStartingPoint([longitude,latitude]); 
           
             //console.log(startingPoint)
        },
        error => this.setState({error: error.message}),
        {enableHighAccuracy: true, timeout: 60000},
     
        );
      }
      catch(e){
        Alert.alert('Error while trying to get location: ', e);
  
      }
  }
 
  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [
        {coordinates: startingPoint},
        {coordinates: destinationPoint},
      ],
      profile: 'walking',
      geometries: 'geojson',
    };

    const res = await directionsClient.getDirections(reqOptions).send();

    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(newRoute);
  };
 const markerClick=(coordinate)=>{

  setdestinationpoint(coordinate);
  console.log(coordinate);
  console.log("starting point is"+startingPoint);
  console.log("destination point is"+destinationPoint);

  fetchRoute();
 };
  
  // const res = await directionsClient.getDirections(reqOptions).send();

  // const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
  // setRoute(newRoute);}
  // const renderAnnotations = () => {
  //   return (
    
  //   );
  // }
 
//   const Marker = ({coordinate,  color, label,key}) => {
//     console.log(key);
//     return (    

//       <MarkerView coordinate={coordinate}  key={key}  >   
//        <View style={{
//               height: 10, 
//               width: 200, 
//               backgroundColor: '#fff',   
//               borderColor: '#fff', 
//               borderWidth: 3
//             }} 
//           >
//        <Text style={styles.text}  onPress= {()=>markerClick(coordinate)}>{label}</Text>


//           </View>
//       {/* <View style={styles.container} >
//      <View style={styles.textContainer}  >
//      </View>
//    </View> */}
// {/*
                                                  
//                     <TouchableHighlight onPress= {()=>console.log("pressed")}>

//                       <Text style={{color:"#000000"}} >{label}</Text>
//                       </TouchableHighlight>

//             </View>
//             */}
//       </MarkerView>
  
//   );
//   };
  
  return (
    <View style={{flex: 1, height: "100%", width: "100%" }}>
      <MapboxGL.MapView
        showUserLocation={true}
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={13}
        centerCoordinate={initstartingPoint}
        style={{flex: 1}}>
          <MapboxGL.Camera
            zoomLevel={13}
            centerCoordinate={initstartingPoint}
            animationMode={'flyTo'}
            animationDuration={0}
          >
          </MapboxGL.Camera>
         
          {
            mapdata != null && mapdata.map((marker,i) =>(

              <MarkerView coordinate={[parseFloat(marker.Longitude),parseFloat(marker.Latitude)]}  key={i}  >   
              {/* <View style={styles.container} >
             <View style={styles.textContainer}>
               <Text style={styles.text}  onPress= {()=>markerClick([parseFloat(marker.Longitude),parseFloat(marker.Latitude)])}>{marker.Name}</Text>
             </View>
           </View> */}
            <View style={{
              height: 20, 
              width: 200, 
              backgroundColor: '#ffffff00',   
            }} 
          >

<Text style={{color:"#E77F24"}}  onPress= {()=>markerClick([parseFloat(marker.Longitude),parseFloat(marker.Latitude)])}>{marker.Name}</Text>

          </View>
           </MarkerView>
              /* <Marker
              coordinate = {[parseFloat(marker.Longitude),parseFloat(marker.Latitude)]}
              color="#DC143C"
              label={marker.Name}
              key={k+1}
              //onPress={()=>markerClick([parseFloat(marker.Longitude),parseFloat(marker.Latitude)])}
              >

              </Marker> */
              
            ))
          }
          {/* {  startDestinationPoints.map((point, index) => (
        <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}> 
            <View style={{
              height: 30, 
              width: 30, 
              backgroundColor: '#00cccc', 
              borderRadius: 50, 
              borderColor: '#fff', 
              borderWidth: 3
            }} 
          />
        </MapboxGL.PointAnnotation>
      ))} */}
          {
          route && (
           <MapboxGL.ShapeSource id='shapeSource' shape={route}>
              <MapboxGL.LineLayer id='lineLayer' style={{lineWidth: 5, lineJoin: 'bevel', lineColor: '#ff0000'}} />
            </MapboxGL.ShapeSource>
          )
        }
          <MapboxGL.UserLocation/>
         

      </MapboxGL.MapView>
  
    </View>
  )
}









export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
    backgroundColor: 'transparent',
    height: 100,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal:5,
    flex: 1,
  },
  icon: {
    paddingTop:10,
  },
 });







