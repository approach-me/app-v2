import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const HomeName = 'home';
export const HomeIcon = require('../../assets/icons/home.png');

export default function Home() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>Home Screen</Text>
    </SafeAreaView>
  );
}
