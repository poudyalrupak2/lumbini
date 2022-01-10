import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  navigation,
  ScrollView,
  Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
export default class MayaDeviTemple extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Lumbini Development Trust</Text>
        <View style = {styles.lineStyle} />

       <View style={styles.container}>
       <View style={{marginTop:10}}>
       <View style={styles.inner}>
       <MaterialCommunityIcons name="web" color="#8a2be2" size={50} />
         <Text style={styles.text}> Lumbinidevtrust.gov.np</Text>
       </View>
       <View style={styles.inner}>
       <MaterialCommunityIcons name="facebook" color="#1877f2" size={50} />
         <Text style={styles.text}> /Lumbinidevtrust</Text>
       </View>
       <View style={styles.inner}>
       <Entypo name="twitter-with-circle" color="#00acee" size={50} />
         <Text style={styles.text}> @ Lumbinidtrust</Text>
       </View>
       <View style={styles.inner}>
       <Entypo name="instagram-with-circle" color="#8a3ab9" size={50} />
         <Text style={styles.text}>  @ Lumbinidtrust</Text>
       </View>
       <View style={styles.inner}>
       <Entypo name="youtube-with-circle" color="#c4302b" size={50} />
         <Text style={styles.text}>  Lumbini Development Trust Nepal</Text>
       </View>
       <View style={styles.inner}>
       <Entypo name="mail-with-circle" color="#6b8e23" size={50} />
         <Text style={styles.text}>  info@lumbinidevtrust.gov.np</Text>
       </View>
       </View>
     
        
        </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#FF9800'
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 8,
    color: '#f0f8ff',
  },
  headline1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    marginRight: 8,
  },
  lineStyle:{
    borderWidth: 3,
    borderColor:'#FF9800',
    margin:10,
},
  help: {
    marginTop: 20,
    marginLeft: 120,
  },
  image:{

    width: '100%',
    height:'100%'
  },
  text:{
    color: '#f0f8ff',
    fontSize: 20,
    alignSelf:'center',
    
   },
   inner:{
     flexDirection:'row',
    marginTop: 10,
   marginHorizontal:10,
    
   }
});
