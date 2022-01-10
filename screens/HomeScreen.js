import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  color,ScrollView
} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';
import NetScreen from './NetScreen';

export default class HomeScreen extends React.Component {
  state = {
    audio: false,
    sound: new Sound('default.mp3'),
    data: []
  };

  playSound = () => {
    // if audio is true we need to make it false and stop
    if (this.state.audio) {
      this.setState({audio: false});
      this.state.sound.stop();
      // if audio is false we need to make it true and play
    } else {
      this.setState({audio: true});
      this.state.sound.play();
    }
  };
  fetchData = async () => {
    const response = await fetch('http://202.45.146.174/lumbini/api/category');
    const responseJson = await response.json(); // products have array data
    this.setState({data: responseJson}); // filled data with dynamic array
  };

  componentDidMount = () => {
    fetch('http://202.45.146.174/lumbini/api/audioandvideo/audio')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.AudioPath);

        this.setState({
          loading: false,
          sound: new Sound(
            'http://202.45.146.174/lumbini' + responseJson.AudioPath,
          ),
        });
      })
      .catch(error => {
        console.log(error);
      });
      this.fetchData();
  };

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <NetScreen />
        <View style={{flexDirection: 'column', justifyContent: 'center',alignItems: 'center',marginTop: 10,}}>
             
             
          
     
          <Avatar.Image  source={require('./Image/buddha6.jpg')}size={150}
          
          />
        </View>
        <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Buddha was born in Nepal</Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigate('Maps')}>
          <Text style={styles.text1}>Visit Birth Place of Lord Buddha</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center',alignItems: 'center'}}>
          <TouchableOpacity onPress={this.playSound}>
            <View>
              {/* showing play button is audio is false else pause */}
              <Icon
                name={this.state.audio ? 'ios-pause' : 'ios-play'}
                color= "orange"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.category}>
      
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  backgroundColor: '#fff'
    
  },
  category:{
    backgroundColor: '#fceed1'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize:15,
    marginBottom: 5,
    fontStyle: 'italic',
    color: '#FF9800' 
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    textAlign: 'center',
    width: 200
    
  },
  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize:15,
    marginBottom: 5,
    fontStyle: 'italic',
    color: '#FF9800' 
  },
  image:{
    marginLeft:95,
    marginTop: 50,
    width: '50%',
    height: '65%',
    //resizeMode: "stretch",
    //resizeMode:"contain" ,
   //resizeMode:"center" ,
  // resizeMode: "repeat",
   resizeMode: "cover" 
           
  }
  
});
