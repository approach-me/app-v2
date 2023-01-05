/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedView from './src/AuthenticatedView';
import Landing from './src/screens/Landing';

const Stack = createStackNavigator();

export default function App() {
  const isSignedIn = false;
  return (
    <NavigationContainer theme={ApproachTheme}>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="AuthenticatedView"
            component={AuthenticatedView}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// We could also set primary, secondary colors here.
// See: https://reactnavigation.org/docs/themes/
const ApproachTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#3126B4',
  },
};
