import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const ExploreName = 'explore';
export const ExploreIcon = require('../../assets/icons/explore.png');

export default function Explore() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>Explore Screen</Text>
      <Text style={{fontWeight: 'bold'}}>(Not to be implemented for MVP)</Text>
    </SafeAreaView>
  );
}
