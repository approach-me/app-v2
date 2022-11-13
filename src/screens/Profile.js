import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const ProfileName = 'profile';
export const ProfileIcon = require('../../assets/icons/profile.png');

export default function Home() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>Profile Screen</Text>
    </SafeAreaView>
  );
}
