import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    data: [],
    refreshing: false,
  };
  fetchData = async () => {
    const response = await fetch('http://202.45.146.174/lumbini/api/category');
    const responseJson = await response.json(); // products have array data
    this.setState({data: responseJson}); // filled data with dynamic array
  };
  componentDidMount() {
    this.fetchData();
  }
  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
       <View style={{...styles.button, ...this.props.style}}>
          <Text style= {{...styles.buttonText, ...this.props.textStyling}}>Category</Text>
          </View>
        <ScrollView>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.Id.toString()}
            numColumns={2}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => navigate('Detail', {Id: item.Id})}>
                  <Image
                    style={{height: 200, width: 200, margin: 5}}
                    source={{
                      uri: 'http://202.45.146.174/lumbini' + item.Thumbnail,
                    }}
                  />
                  <Text style={styles.price} numberOfLines={2} ellipsizeMode='tail'>{item.CategoryName}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fceed1',
  },
  picture: {
    marginTop: -10,
    marginBottom: 50,
  },

  imagestyle: {
    height: 100,
    width: 100,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    textAlign: 'center',
    width: 200
    
  },
  button:{
    backgroundColor:"darkorange",
    paddingVertical:12,
    paddingHorizontal:140,
    borderRadius: 0,
    marginTop:0
  },
  buttonText:{
  color: "#fff",
  fontSize:20,
  fontWeight: 'bold'
 
  }
});
