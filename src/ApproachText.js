import React from 'react';
import {Text} from 'react-native';

export default function ApproachText(props) {
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: `Archivo-${convertFontWeight(props.style.fontWeight)}`,
      }}>
      {props.children}
    </Text>
  );
}

function convertFontWeight(fontWeight) {
  if (fontWeight === '900') {
    return 'ExtraBold';
  } else if (
    fontWeight === 'bold' ||
    fontWeight === '700' ||
    fontWeight === '800'
  ) {
    return 'Bold';
  } else if (
    fontWeight === 'light' ||
    fontWeight === '300' ||
    fontWeight === '400'
  ) {
    return 'Light';
  } else if (
    fontWeight === 'thin' ||
    fontWeight === '100' ||
    fontWeight === '200'
  ) {
    return 'Thin';
  }
  return 'Regular';
}
