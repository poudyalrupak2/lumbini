import React, {Component} from 'react';
import {
  StyleSheet,
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
const imageURI = Image.resolveAssetSource(require('./Image/buddha6.jpg')).uri;

export default class NoticeScreen extends Component {
  static navigationOptions = {
    title: 'Notice',
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
    refreshing: false,
    isShowModal: false,
    showImageUri: null,
  };

  fetchData = async () => {
    const response = await fetch('http://202.45.146.174/lumbini/api/notice');
    const responseJson = await response.json();
    this.setState({data: responseJson});

    console.log(responseJson);
    console.log(response);
  
  };

  componentDidMount() {
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
      <View style={styles.container}>
       <View style={{...styles.button, ...this.props.style}}>
          <Text style= {{...styles.buttonText, ...this.props.textStyling}}>Notice</Text>
          </View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.Id.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          numColumns={4}
          renderItem={({item}) => (
            <View >
              <TouchableOpacity
                onPress={() => navigate('Notice1', {Id: item.Id,title:item.Title})}>
                <Image
                  style={{height: 100,  margin: 5}}
                  source={{
                    uri: (item.NoticeImages!=null)?('http://202.45.146.174/lumbini' + item.NoticeImages):imageURI,
                  }}
                />
               <Text style={styles.TextStyle}>{item.Title}</Text>

            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={() => navigate('Notice1', {Id: item.Id,title:item.Title})}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.TextStyle}>{item.Title}</Text>
                <Text style={styles.TextStyle}>Type:{item.VideoUrl}</Text> 
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
    fontSize: 10,
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
