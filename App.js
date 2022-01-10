import React, {component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import MessageScreen from './screens/MessageScreen';
import MainScreen from './screens/MainScreen';
import GalleryScreen from './screens/GalleryScreen';
import CategoryScreen from './screens/CategoryScreen';
import AudioScreen from './screens/AudioScreen';
import NoticeScreen from './screens/NoticeScreen';
import LoginScreen from './screens/LoginScreen';
import {DrawerContent} from './screens/DrawerContent';


const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator hideStatusBar={true}  drawerContent={props => <DrawerContent {...props}/>}
       drawerStyle={{
          backgroundColor: '#fff',
          width: 250,
        }}
        initialRouteName="Home">
     
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Gallery" component={GalleryScreen}/>
        <Drawer.Screen name="Category" component={CategoryScreen} />
        {/* <Drawer.Screen name="Audio" component={AudioScreen} /> */}
        <Drawer.Screen name="Notice" component={NoticeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
