import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'column', marginTop: 15,marginLeft: 30}}>
              <Avatar.Image source={require('./Image/LDT.jpg')} size={100} />
              <View style={{marginLeft:-40, flexDirection: 'column'}}>
                <Title style={styles.title}> Lumbini Development Trust</Title>
              </View>
            </View>
            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  1M
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home-outline"
                  color={'#FF9800'}
                  size={size}
                  type="FontAwesome"
                  
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name= "image-outline" color={'#FF9800'} size={size} />
              )}
              label="Gallery"
              onPress={() => {
                props.navigation.navigate('Gallery');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="alpha-c-box-outline" color={'#FF9800'} size={size} />
              )}
              label="Category"
              onPress={() => {
                props.navigation.navigate('Category');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="music-box-outline" color={'#FF9800'} size={size} />
              )}
              label="Audio"
              onPress={() => {
                props.navigation.navigate('Audio');
              }}
            /> */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="note-outline" color={'#FF9800'} size={size} />
              )}
              label="Notice"
              onPress={() => {
                props.navigation.navigate('Notice');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="key-outline" color={'#FF9800'} size={size} />
              )}
              label="Login"
              onPress={() => {
                props.navigation.navigate('Login');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 40,
    color: '#FF9800',
    fontWeight: 'bold'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
