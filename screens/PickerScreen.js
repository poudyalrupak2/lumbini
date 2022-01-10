// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   ScrollView,
//   Platform,
//   Button,
//   Text,
//   Picker,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// export default class CreateScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: [],
      
     
//       Latitude: '',
//       Longitude: '',
    
//     };
//   }
//   Insert_Data_Into_MySQL = () => {
//     fetch('http://202.45.146.174/lumbini/api/category/PostCategory', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
       
//         Latitude: this.state.currentLongitude,
//         Longitude: this.state.currentLatitude,
       
//         id: this.state.PickerValueHolder,
       
//       }),
//     })
//       .then(response => response.json())
//       .then(responseJsonFromServer => {
//         Alert.alert(JSON.stringify(responseJsonFromServer));
       
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   componentDidMount = () => {
//     fetch('http://202.45.146.174/lumbini/api/category')
//       .then(response => response.json())
//       .then(responseJsonFromServer => {
//         this.setState({
//           isLoading: false,
//           dataSource: responseJsonFromServer,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
   
   
//   };
//   render() {
//     return (
//       <ScrollView style={StyleSheet.container}>
       
//         <TextInput
//           placeholder="Latitude"
//           value= {this.state.currentLatitude}
//           onChangeText={TextInputText =>
//             this.setState({Latitude: TextInputText})
//           }
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyle}
//         />
//         <TextInput
//           placeholder="Longitude"
//           value={this.state.currentLongitude}
//           onChangeText={TextInputText =>
//             this.setState({Longitude: TextInputText})
//           }
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyle}
//         />
       

//         <Picker
//           selectedValue={this.state.PickerValueHolder}
//           style={{height: 50, width: '50%', alignSelf: 'center'}}
//           onValueChange={itemValue =>
//             this.setState({PickerValueHolder: itemValue})
//           }>
//           <Picker.Item label="CategoryName" value="CategoryName" />
//           {this.state.dataSource.map((item, key) => (
//             <Picker.Item label={item.CategoryName} value={item.id} key={key} />
//           ))}
//         </Picker>
       
      

       
//       </ScrollView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,
//     borderBottomWidth: 1,
//     marginTop: 5,
//     backgroundColor: '#fff',
//   },

//   TextInputStyle: {
//     textAlign: 'center',
//     alignSelf: 'center',

//     marginBottom: 7,
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#FF5722',
//   },
//   TextInputStyle2: {
//     textAlign: 'center',
//     alignSelf: 'center',
//     marginTop: 15,

//     marginBottom: 7,
//     width: '50%',
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#FF5722',
//   },
//   TextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   TouchableOpacityStyle: {
//     alignSelf: 'center',
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//     width: '50%',
//     backgroundColor: '#00BCD4',
//   },
//   ActivityIndicatorStyle: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedItemView: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     padding: 14,
//     backgroundColor: '#263238',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedText: {
//     position: 'relative',
//     fontSize: 17,
//     color: '#F44336',
//   },
// });

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PickerScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
