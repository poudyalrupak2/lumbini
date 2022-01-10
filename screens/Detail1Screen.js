import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  RefreshControl,
  Alert,
} from 'react-native';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import Slideshow from 'react-native-image-slider-show';
export default class Detail1Screen extends Component {
  state = {
    data: [],
    urls: [],
    data2: [],
    refreshing: false,
  };
  fetchData = async () => {
    const {params} = this.props.route;
    console.log(this.props.route);

    const {data: responseJson} = await Axios.get(
      'http://202.45.146.174/lumbini/api/inventory/images/' + params.Id,
    );

    console.log(params.Id, responseJson);
    this.setState({data: responseJson});
  };
  getInventoryDetails = async () => {
    const response = await fetch(
      `http://202.45.146.174/lumbini/api/inventory/` + this.props.route.Id,
    );
    const data = await response.json();
    this.setState({data2: data});
  };
  fetchData2 = async () => {
    const {params} = this.props.route;
    console.log(this.props.route);

    const {data2: responseJson2} = await Axios.get(
      'http://202.45.146.174/lumbini/api/inventory/' + params.Id,
    );

    console.log(params.Id, responseJson2);
    this.setState({data2: responseJson2}); 
  };

  componentDidMount = () => {
    this.props.navigation.setOptions({title: this.props.route.params.name});
    this.fetchData();
   
    const {params} = this.props.route;
    fetch('http://202.45.146.174/lumbini/api/inventory/' + params.Id)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data2: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
    
  };

  render() {
    console.log(JSON.stringify(this.props, null, 2));
    const {navigate} = this.props.navigation;
    console.log(this.state.data.ImagePath);
    console.log(this.state.data2);

    return (
      <View style={styles.container}>
        <ScrollView>
          <Slideshow
            dataSource={this.state.data.map(elem => {
              return {
                url: 'http://202.45.146.174/lumbini' + elem.ImagePath,
              };
            })}
          />

          <Text style={styles.headline}>
            {this.state.data2 != null ? this.state.data2.LongDetali : ''}
          </Text>
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
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
  },

  price: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  proName: {
    padding: 5,
    color: 'blue',
    textAlign: 'center',
  },
});
