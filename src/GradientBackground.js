import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientBackground(props) {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#3126B4', '#008BF2']}
      style={{...props.style, ...styles.linearGradient}}
    >
      {props.children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  }
})