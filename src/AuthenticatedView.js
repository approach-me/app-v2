import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home, {HomeName, HomeIcon} from './screens/Home';
import Profile, {ProfileName, ProfileIcon} from './screens/Profile';
import DMs, {DMsName, DMsIcon} from './screens/DMs';
import Explore, {ExploreName, ExploreIcon} from './screens/Explore';
import LogoReducedWithGradient from '../assets/logo/reduced-gradient.png';
import LogoBlack from '../assets/logo/black.png';

const Tab = createBottomTabNavigator();

// Just to prevent warnings of passing
// anonymous function as a component.
const Null = () => null;

export default function AuthenticatedView() {
  return (
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
  )
}

// See: https://reactnavigation.org/docs/screen-options/
const screenAndTabOptions = {
  headerTitle: _ => <Image source={LogoBlack} />,
  headerStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'rgba(41, 40, 49, 0.2)',
    borderBottomWidth: 1,
  },
  headerTitleAlign: 'center',
  headerTintColor: 'black',
  tabBarShowLabel: false,
  tabBarStyle: {height: 75},
  contentStyle: {backgroundColor: 'white'},
};
