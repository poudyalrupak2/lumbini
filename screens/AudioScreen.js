// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   ActivityIndicator,
//   FlatList,
//   Modal,
//   RefreshControl,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import Video from 'react-native-video';
// import Sound from 'react-native-sound';
// import Icon from 'react-native-vector-icons/Ionicons';

// export default class AudioScreen extends Component {
//   state = {
//     data: [],
//     refreshing: false,
//     isShowModal: false,
//     showImageUri: null,
//     audio: false,
//   };
//   playSound = (AudioPath) => {
//     // if audio is true we need to make it false and stop
//     if (this.state.audio) {
//       this.setState({audio: false});
//       // if audio is false we need to make it true and play
//     } else {
//       if(AudioPath!=null){
//       hello=new Sound('http://202.45.146.174/lumbini/'+AudioPath);
//       }
//       else{
//         hello=new Sound('default.mp3');

//       }
//       this.setState({audio: true});
//       hello.play();
//     }
//   };

//   fetchData = async () => {
//     const response = await fetch(
//       'http://202.45.146.174/lumbini/api/audioandvideo',
//     );
//     const responseJson = await response.json();
//     this.setState({data: responseJson});

//     console.log(responseJson);
//     console.log(response);
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   _onRefresh() {
//     this.setState({refreshing: true});
//     this.fetchData()
//       .then(() => {
//         this.setState({refreshing: false});
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   FlatListItemSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: 'rgba(0,0,0,0.5)',
//         }}
//       />
//     );
//   };

  

//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <View style={{...styles.button, ...this.props.style}}>
//           <Text style={{...styles.buttonText, ...this.props.textStyling}}>
//             Audio & Video
//           </Text>
//         </View>

//         <View style={{...styles.button1, ...this.props.style}}>
//           <Text style={{...styles.buttonText1, ...this.props.textStyling}}>
//             Audio
//           </Text>
//         </View>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={item => item.Id.toString()}
//           ItemSeparatorComponent={this.FlatListItemSeparator}
//           renderItem={({item}) => (
//             <View style={styles.productBox1}>
//               {console.log(item.AudioPath)}
//               <View
//                 style={{flexDirection: 'row', marginTop: 30, marginLeft: -20}}>
//                 <TouchableOpacity onPress={this.playSound(item.AudioPath)}>
//                   <Icon
//                     name={this.state.audio ? 'ios-pause' : 'ios-play'}
//                     color="orange"
//                     size={50}
//                   />
//                 </TouchableOpacity>
//               </View>

//               <View style={{flex: 1, flexDirection: 'column'}}>
//                 <Text style={styles.TextStyle}>{item.Title}</Text>
//               </View>
//             </View>
//           )}
          
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     flexDirection: 'column',
//   },
//   TextStyle: {
//     color: '#000000',
//     padding: 8,
//     fontSize: 16,
//     marginTop: 35,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   productBox: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   productBox1: {
//     flex: 1,
//     flexDirection: 'row',
//     marginRight: 50,
//     marginLeft: 50,
//   },
//   list: {
//     paddingVertical: 4,
//     margin: 5,
//     backgroundColor: '#fff',
//   },
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   button: {
//     backgroundColor: 'darkorange',
//     paddingVertical: 12,
//     paddingHorizontal: 110,
//     borderRadius: 0,
//     marginTop: 0,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   button1: {
//     backgroundColor: 'darkorange',
//     paddingVertical: 5,
//     paddingHorizontal: 70,
//     borderRadius: 90,
//     marginTop: 5,
//     width: '50%',
//     marginLeft: 90,
//   },
//   buttonText1: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


// {/* <View style={{marginBottom: 200}}>
//           <View
//             style={{
//               borderBottomColor: '#FF9800',
//               borderBottomWidth: 2,
//               width: '80%',
//               marginLeft: 30,
//             }}
//           />
         
//         </View>

// // <View style={{...styles.button1, ...this.props.style}}>
// // <Text style={{...styles.buttonText1, ...this.props.textStyling}}>
// //   Video
// // </Text>
// // </View>

// // <FlatList */}
// // data={this.state.data}
// // keyExtractor={item => item.Id.toString()}
// // ItemSeparatorComponent={this.FlatListItemSeparator}
// // renderItem={({item}) => (
// //   <View style={styles.productBox}>
// //     <TouchableOpacity
// //       onPress={() =>
// //         navigate('Detail3', {Id: item.Id, VideoUrl: item.VideoUrl})
// //       }>
// //       <Image
// //         style={{height: 100, width: 100, margin: 5}}
// //         source={require('./Image/buddha6.jpg')}
// //       />
// //     </TouchableOpacity>

// //     <TouchableOpacity>
// //       <Video
// //         style={{height: 90, width: 90, margin: 5}}
// //         source={{
// //           uri: item.VideoUrl,
// //         }}
// //         ref={ref => {
// //           this.player = ref;
// //         }}
// //         VideoUrl={item.VideoUrl}
// //         onBuffer={this.onBuffer}
// //         onEnd={this.onEnd}
// //         onError={this.videoError}
// //         style={styles.backgroundVideo}
// //       />
// //     </TouchableOpacity>

// //     <View style={{flex: 1, flexDirection: 'column'}}>
// //       <Text style={styles.TextStyle}>{item.VideoUrl}</Text>
// //       {/* <Text style={styles.TextStyle}>Type:{item.Title}</Text> */}
// //     </View>
// //   </View>
// // )}
// // refreshControl={
// //   <RefreshControl
// //     refreshing={this.state.refreshing}
// //     onRefresh={this._onRefresh.bind(this)}
// //   />
// // }
// // />