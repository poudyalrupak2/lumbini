import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  Modal,
  RefreshControl,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import Axios from 'axios';
const imageURI = Image.resolveAssetSource(require('./Image/buddha6.jpg')).uri;
const { width, height } = Dimensions.get('screen');

export default class DetailScreen extends Component {

  state = {
    data: [],
    refreshing: false,
    isShowModal: false,
    showImageUri: null,
  };

  fetchData = async () => {
    const {params} = this.props.route;
    console.log(this.props.route);

    const {data: responseJson} = await Axios.get(
      'http://202.45.146.174/lumbini/api/inventory/category/' + params.Id,
    );

    console.log(31, responseJson);
    this.setState({data: responseJson}); // filled data with dynamic array
  };
  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.title});
    this.fetchData();
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData()
      .then(() => {
        this.setState({refreshing: false});
      })
      .catch(error => {
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#FF9800',
        }}
      />
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View >
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.Id.toString()}
          numColumns={4}
          renderItem={({item})=> (
            <View >
              <TouchableOpacity
                onPress={() =>
                  navigate('Detail1', {Id: item.Id, name: item.Name})
                }>
                
                <Image
                    style={{height: 200, margin:5}}
                  
                  source={{
                    uri:(item.Thumbnail!=null)?('http://202.45.146.174/lumbini' + item.Thumbnail):imageURI
                    // :'',
                  }}
                />
                <Text style={styles.TextStyle}>{item.Name}</Text>
                </TouchableOpacity>
             {/* <TouchableOpacity
                onPress={() =>
                  navigate('Detail1', {Id: item.Id, name: item.Name})
                }>
              <View style={{flex: 1, flexDirection: 'column'}}>
                
              </View>
              </TouchableOpacity> */}
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  TextStyle: {
    fontWeight:'bold',
    fontSize: 12,
    textAlign: 'justify',
    textAlign: 'center',
    color: "black",
    margin:5
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productBox: {
    flex: 1,
    flexDirection: 'row',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
