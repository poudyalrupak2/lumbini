import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';

import {WebView} from 'react-native-webview';
export default class App extends React.Component {
  state = {
    data: [],
    refreshing: false,
    isShowModal: false,
    showImageUri: null,
    videoUrl: '',
    Id: null,
  };
  fetchData = async () => {
    const response = await fetch(
      'http://202.45.146.174/lumbini/api/audioandvideo',
    );
    const responseJson = await response.json();
    var result = responseJson;
    console.log(result);
    var videoUrl = result.filter(m => m.Id == 5);
    if (videoUrl.length > 0) {
      this.setState({videoUrl: videoUrl[0].VideoUrl});
      console.log(videoUrl[0].VideoUrl);
      console.log(this.state.videoUrl);
    }
  };

  componentDidMount() {
    const url = this.props.route;

    console.log(url);
    console.log(url.params);
    this.setState({videoUrl: url.params.VideoUrl});
    // this.fetchData();
  }

  //   render() {
  //     return (
  //       <View style={styles.container}>
  //         <ScrollView>
  //           <YouTubePlayer
  //             ref={ref => (this.youTubePlayer = ref)}
  //             videoId="9eY93xAilfw"
  //             autoPlay={true}
  //             fullscreen={false}
  //             showFullScreenButton={true}
  //             showSeekBar={true}
  //             showPlayPauseButton={true}
  //             startTime={5}
  //             style={{width: '100%', height: 200}}
  //             onReady={e => console.log('onReady', e.type)}
  //             onError={e => console.log('onError', e.error)}
  //             onChangeState={e => console.log('onChangeState', e.state)}
  //             onChangeFullscreen={e =>
  //               console.log('onChangeFullscreen', e.isFullscreen)
  //             }
  //           />
  //           <View>

  //              <TouchableOpacity

  //               style={styles.button}
  //               onPress={() => this.youTubePlayer.play()}>
  //               <Text style={{color: '#ffffff'}}>Play</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={styles.button}
  //               onPress={() => this.youTubePlayer.pause()}>
  //               <Text style={{color: '#ffffff'}}>Pause</Text>
  //             </TouchableOpacity>

  //           </View>
  //         </ScrollView>
  //       </View>
  //     );
  //   }
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop:3,

  //   },
  //   button: {
  //     backgroundColor: 'red',
  //     margin: 12,
  //     padding: 12,
  //     borderRadius: 4,

  //     alignItems: "center"
  //   },
  // });

  // ...

  render() {
    //this.setState({Id:Id})
    return <WebView source={{uri: this.state.videoUrl}} />;
  }
}
