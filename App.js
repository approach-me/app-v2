/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home, {HomeName, HomeIcon} from './src/screens/Home';
import Profile, {ProfileName, ProfileIcon} from './src/screens/Profile';
import DMs, {DMsName, DMsIcon} from './src/screens/DMs';
import Explore, {ExploreName, ExploreIcon} from './src/screens/Explore';
import LogoReducedWithGradient from './assets/logo/reduced-gradient.png';
import LogoBlack from './assets/logo/black.png';

const Tab = createBottomTabNavigator();

// Just to prevent warnings of passing
// anonymous function as a component.
const Null = () => null;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenAndTabOptions}>
        <Tab.Screen
          component={Home}
          options={{tabBarIcon: () => <Image source={HomeIcon} />}}
          name={HomeName}
        />
        <Tab.Screen
          component={Explore}
          options={{tabBarIcon: () => <Image source={ExploreIcon} />}}
          name={ExploreName}
        />
        <Tab.Screen
          name="approach"
          options={{
            tabBarIcon: () => <Image source={LogoReducedWithGradient} />,
          }}
          component={Null}
          // Prevents navigation since this is just aesthetic.
          listeners={() => ({tabPress: e => e.preventDefault()})}
        />
        <Tab.Screen
          component={DMs}
          options={{tabBarIcon: () => <Image source={DMsIcon} />}}
          name={DMsName}
        />
        <Tab.Screen
          component={Profile}
          options={{tabBarIcon: () => <Image source={ProfileIcon} />}}
          name={ProfileName}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenAndTabOptions = {
  headerTitle: _ => <Image source={LogoBlack} />,
  headerStyle: {backgroundColor: '#fff'},
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  tabBarShowLabel: false,
  tabBarStyle: {height: 75},
};
