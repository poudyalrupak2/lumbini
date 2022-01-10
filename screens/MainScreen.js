import React, {component } from 'react'
import { SafeAreaView, StyleSheet,ScrollView, View, Text,StatusBar, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailScreen from './DetailScreen';
import Detail1Screen from './Detail1Screen';
import MayadeviScreen from './MayadeviScreen';
import Detail3Screen from './Detail3Screen';
import MapsScreen from './MapsScreen';
import category1Screen from './category1Screen';
import Notice1Screen from './Notice1Screen';
import Inventory1Screen from './Inventory1Screen';
import Gallery1Screen from './Gallery1Screen';
import NoticeScreen from './NoticeScreen';

import SelectScreen  from  './SelectScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MapsStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Detail1Stack = createStackNavigator();
const MayadeviStack = createStackNavigator();
const Detail3Stack = createStackNavigator();
const category1Stack = createStackNavigator();
const Notice1Stack = createStackNavigator();
const Inventory1Stack = createStackNavigator();
const Gallery1Stack = createStackNavigator();
const SelectStack  = createStackNavigator();

const noticeStack = createStackNavigator();

const MainTabScreen =() => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#FF0000"
     inactiveColor="#fff"
    barStyle={{ backgroundColor: '#FF9800' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        shifting: 'true',
        tabBarColor: '#FF9800',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Profile"
      component={Inventory1Screen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#FF9800',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Detail1"
      component={MapsScreen}
      options={{
        tabBarLabel: 'map',
        tabBarColor: '#FF9800',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-map" color={color} size={26} />
        ),
      }}
    />

<Tab.Screen 
      name="Detail2"
      component={MayadeviScreen}
      options={{
        tabBarLabel: 'contact',
        tabBarColor: '#FF9800',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-contacts" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({navigation,route}) => {
  // const { params } = navigation.state;
  //const { CategoryName } = route.params;

    return <HomeStack.Navigator 
            screenOptions={{
              headerStyle: { backgroundColor: '#FF9800' },
              headerTintColor: '#fff',
              fontWeight: 'bold',
         
              headerTitleStyle: { fontWeight: 'bold',alignSelf: 'center' 
            }
            }}>
            
            <HomeStack.Screen name="Home" component={HomeScreen}
              options={{
         title: 'Welcome in Lumbini',
            headerLeft: ()=> (
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#FF9800" onPress={() => navigation.openDrawer
              ()}></Icon.Button>
            )
               }}/>
               <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
         title: 'Location'}}/>
               <DetailStack.Screen name="Detail" component={DetailScreen}/>
               <Detail1Stack.Screen name="Detail1" component={Detail1Screen} />
               <MayadeviStack.Screen name="Mayadevi" component={MayadeviScreen}/>
               <Detail3Stack.Screen name="Detail3" component={Detail3Screen} options={{
         title: 'Video'}}/>
               <category1Stack.Screen name="category1" component={category1Screen}/>
               <noticeStack.Screen name="Notice" component={NoticeScreen}/>

               <Notice1Stack.Screen name="Notice1" component={Notice1Screen}/>
               <Inventory1Stack.Screen name="Inventory1" component={Inventory1Screen}/>
               <MapsStack.Screen name="Maps" component={MapsScreen}/>
               <Gallery1Stack.Screen name="Gallery1" component={Gallery1Screen}/>
               <SelectStack.Screen name="Select" component={SelectScreen}/>
               
          </HomeStack.Navigator>
};


    // const ProfileStackScreen = ({navigation}) => (
    //   <ProfileStack.Navigator 
    //           screenOptions={{
    //             headerStyle: { backgroundColor: '#FF9800' },
    //             headerTintColor: '#fff',
    //             fontWeight: 'bold',
                
    //             headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //           }}>
              
    //           <ProfileStack.Screen name="" component={ProfileScreen}  />
             
    //         </ProfileStack.Navigator>
    //   );
    
    // const MapsStackScreen = ({navigation}) => (
    //   <MapsStack.Navigator 
    //           screenOptions={{
    //             headerStyle: { backgroundColor: '#FF9800' },
    //             headerTintColor: '#fff',
    //             fontWeight: 'bold',
                
    //             headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //           }}>
              
    //           <MapsStack.Screen name="Maps" component={MapsScreen}  />
    //         </MapsStack.Navigator>
    //   );
      

    //   const DetailStackScreen = ({navigation}) => (
    //     <DetailStack.Navigator 
    //             screenOptions={{
    //               headerStyle: { backgroundColor: '#FF9800' },
    //               headerTintColor: '#fff',
    //               fontWeight: 'bold',
                  
    //               headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //             }}
    //             >
                
    //             <DetailStack.Screen name="Detail" component={DetailScreen}/>
    //           </DetailStack.Navigator>
    //     );
      
    //     const Detail1StackScreen = ({navigation}) => (
    //       <Detail1Stack.Navigator 
    //               screenOptions={{
    //                 headerStyle: { backgroundColor: '#FF9800' },
    //                 headerTintColor: '#fff',
    //                 fontWeight: 'bold',
                    
    //                 headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //               }}>
                  
    //               <MapsStack.Screen name="Detail1" component={Detail1Screen}   options={{
    //      title: navigation.getParam('CategoryName')}}/>
    //             </Detail1Stack.Navigator>
    //       );
      
          
    //       const MayadeviStackScreen = ({navigation}) => (
    //         <MayadeviStack.Navigator 
    //                 screenOptions={{
    //                   headerStyle: { backgroundColor: '#FF9800' },
    //                   headerTintColor: '#fff',
    //                   fontWeight: 'bold',
                      
    //                   headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
                      
    //                 }}>
                    
    //                 <MayadeviStack.Screen name="Korea Temple" component={MayadeviScreen}  />
    //               </MayadeviStack.Navigator>
    //         );
      
            
    //         const Detail3StackScreen = ({navigation}) => (
    //           <Detail3Stack.Navigator 
    //                   screenOptions={{
    //                     headerStyle: { backgroundColor: '#FF9800' },
    //                     headerTintColor: '#fff',
    //                     fontWeight: 'bold',
                        
    //                     headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //                   }}>
                      
    //                   <Detail3Stack.Screen name="Detail3" component={Detail3Screen}  />
    //                 </Detail3Stack.Navigator>
    //           );
              
    //           const category1StackScreen = ({navigation}) => (
    //             <category1Stack.Navigator 
    //                     screenOptions={{
    //                       headerStyle: { backgroundColor: '#FF9800' },
    //                       headerTintColor: '#fff',
    //                       fontWeight: 'bold',
                          
    //                       headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //                     }}>
                        
    //                     <category1Stack.Screen name="category1" component={category1Screen}  />
    //                   </category1Stack.Navigator>
    //             );
                

    //             const Notice1StackScreen = ({navigation}) => (
    //               <Notice1Stack.Navigator 
    //                       screenOptions={{
    //                         headerStyle: { backgroundColor: '#FF9800' },
    //                         headerTintColor: '#fff',
    //                         fontWeight: 'bold',
                            
    //                         headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //                       }}>
                          
    //                       <Notice1Stack.Screen name="Notice1" component={Notice1Screen}  />
    //                     </Notice1Stack.Navigator>
    //               );
                  
    //               const Inventory1StackScreen = ({navigation}) => (
    //                 <Inventory1Stack.Navigator 
    //                         screenOptions={{
    //                           headerStyle: { backgroundColor: '#FF9800' },
    //                           headerTintColor: '#fff',
    //                           fontWeight: 'bold',
                              
    //                           headerTitleStyle: { fontWeight: 'bold', aligntext: 'center'}
    //                         }}>
                            
    //                         <Inventory1Stack.Screen name="Inventory1" component={Inventory1Screen}  />
    //                       </Inventory1Stack.Navigator>
    //                 );
                    