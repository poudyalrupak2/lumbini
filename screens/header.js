import React from 'react';
import { Image, Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Header = ({ navigation, back, title }) => {
  // Handle back onPress action
  const onBackPress = () => {
    navigation.goBack();
  };

  // Handle menu onPress action
  const onPressMenu = () => {
    navigation.toggleDrawer();
  };

 
    // Render Header with navigation options
    return (
      <View style={styles.container}>

        <TouchableOpacity
          onPress={onBackPress}
          disabled={back ? false : true}>
          <Ionicons
            name="ios-chevron-back"
            size={32}
            color="yellow"
          />
        </TouchableOpacity>

        <View style={styles.logoSpan}>
          <Text numberOfLines={1} style={styles.title}>
            {title === "" ? "" : "Digital Case Management System"}
          </Text>
        </View>

        <TouchableOpacity onPress={onPressMenu}>
          <Ionicons
            name="ios-menu"
            size={32}
            color="yellow"
          />
        </TouchableOpacity>
      </View>
    );
  
};

const styles = StyleSheet.create({  
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        paddingHorizontal:15,
      },
      logoSpan: {
        flex: 1,
        alignItems: 'center',
      },
      logo: {
        width: 120,
        height:55,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 15,
        textAlign: 'center',
        marginTop:4,
      },
    
    
    

});

export default Header;