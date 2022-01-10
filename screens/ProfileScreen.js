import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  Thumbnail,
  TouchableOpacity,
  Button,
  RefreshControl,
  
} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading: true,
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    fetch('http://202.45.146.174/lumbini/api/category')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          data: responseJson,
        });
        this.arrayholder = responseJson;
      })
      .catch(error => console.log(error));
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.CategoryName
        ? item.CategoryName.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      text: text,
    });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '90%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        
          <SearchBar
            round
            containerStyle={{borderWidth: 1, height: 60, width: 395}}
            searchIcon={{size: 24}}
            onChangeText={text => this.SearchFilterFunction(text)}
            placeholder="search"
            value={this.state.text}
          />

          <FlatList
            data={this.state.data}
            keyExtractor={item => item.Id.toString()}
            numColumns={2}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => navigate('Detail', {Id: item.Id,title:item.CategoryName})}>
                  <Image
                    style={{height: 200, width: 187, margin: 5,marginRight:5}}
                    source={{
                      uri: 'http://202.45.146.174/lumbini' + item.Thumbnail,
                    }}
                  
                  />
                
                  <Text style={styles.price}>{item.CategoryName}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
    },
  price: {
    
    fontWeight: 'bold',
    fontSize: 16,
     textAlign: 'justify',
     textAlign: 'center',
    color: "black",
    padding: 5,   //this is gap between text up and down
    width: '70%'
    
  },
});
