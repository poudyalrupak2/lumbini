import React from 'react'
import { View, Text, Button, StyleSheet, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity, } from 'react-native'
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Category',
    headerStyle: {
      backgroundColor: 'maroon',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    
    },

  };
  state = {
    data: [],
    refreshing: false
  };
  fetchData = async () => {

    const response = await fetch('http://202.45.146.174/lumbini/api/category');
    const responseJson = await response.json(); // products have array data
    this.setState({ data: responseJson }); // filled data with dynamic array
  };
  componentDidMount() {
    this.fetchData();
  };
  _onRefresh() {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false })
    });
  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>

          <FlatList
            data={this.state.data}
            keyExtractor = { (item) => item.Id.toString() }
            numColumns={2}
            renderItem={({ item }) =>

              <View  >
                <TouchableOpacity
                  onPress={() => navigate('Detail', { Id: item.Id })}
                >
                  <Image style={{ height: 200, width: 200, margin: 5 }} source={{ uri: 'http://202.45.146.174/lumbini' + item.Thumbnail  }} />
                  <Text style={styles.price}>{item.CategoryName}</Text>
               
                </TouchableOpacity>
              </View>}
          />

       

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fceed1'
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
    textAlign: 'center'
  }
});   