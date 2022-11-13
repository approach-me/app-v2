import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const DMsName = 'dms';
export const DMsIcon = require('../../assets/icons/dms.png');

export default function DMs() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>DM's Screen</Text>
    </SafeAreaView>
  );
}
