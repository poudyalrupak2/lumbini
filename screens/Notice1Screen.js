import React, { Component } from 'react';
import {
  AppRegistry, View, Text,
  StyleSheet, FlatList, Image, StatusBar,
  TouchableOpacity, Button, RefreshControl, Alert
} from 'react-native';

import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
export default class Notice1Screen
 extends Component {
  static navigationOptions = {
    title: 'Notice1',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
   onBackPress = () => {
    this.props.navigation.goBack();
  };

  
  state = {
    data: [],
    refreshing: false
  };
  fetchData = async () => {
   const { params } = this.props.route;
   console.log(this.props.route);
    // const response = await fetch('http://202.45.146.174/lumbini/api/notice/'+params.Id);
  // console.log(28,params)
    const {data:responseJson}  = await Axios.get('http://202.45.146.174/lumbini/api/notice/'+params.Id);
    // const responseJson = await response.json(); // products have array data
    console.log(31,responseJson)
    this.setState({ data: responseJson }); // filled data with dynamic array
  };
  componentDidMount() {
    this.props.navigation.setOptions({title:this.props.route.params.title})
    this.fetchData();
  };
  _onRefresh() {

    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false })
    });
  }
  render() {

    console.log(JSON.stringify(this.props,null,2))
    const { navigate } = this.props.navigation;

    return (
    





          <View style={styles.container}>
      <ScrollView>
        <View style={styles.productBox}>
        <Image style={{ height: 200, width: 390, marginLeft:2,marginTop:1}} source={{ uri: 'http://202.45.146.174/lumbini' + this.state.data.NoticeImages  }} />

        <Text style={styles.headline}>{this.state.data.Detail}</Text>
         
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  headline: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    marginTop:5,
    marginLeft:8,
    marginRight:8
  },

  price: {
    margin: 10, fontWeight: 'bold',
    color: '#000', textAlign: 'center'
  },

  proName: {
    padding: 5, color: 'blue', textAlign: 'center'
  }
})
