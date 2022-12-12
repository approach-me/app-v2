import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GradientBackground from '../GradientBackground';
import ApproachText from '../ApproachText';
import LogoWhite from '../../assets/logo/white.png';

export default function Landing() {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <GradientBackground>
        <View style={{top: '25%', alignItems: 'center'}}>
          <Image source={LogoWhite} />
          <ApproachText style={styles.sloganText}>
            Where it starts.
          </ApproachText>
        </View>

        <View style={styles.helloBlock}>
          <ApproachText style={styles.helloText}>Hello!</ApproachText>
          <ApproachText style={{marginBottom: 32, marginHorizontal: 32}}>
            Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
            num tendi nada.Nullam volutpat risus nec leo commodo, ut interdum
            diam laoreet. Sed non consequat odio.
          </ApproachText>
          <Pressable
            style={{...styles.createAccountButton, backgroundColor: 'white'}}
            onPress={() => null}>
            <ApproachText
              style={{...styles.createAccountButtonText, color: 'black'}}>
              Create Account
            </ApproachText>
          </Pressable>
          <Pressable
            style={{
              ...styles.createAccountButton,
              backgroundColor: colors.primary,
              marginTop: 20,
            }}
            onPress={() => null}>
            <ApproachText
              style={{...styles.createAccountButtonText, color: 'white'}}>
              Sign In
            </ApproachText>
          </Pressable>
        </View>
      </GradientBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sloganText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
    color: 'white',
    opacity: 0.6,
  },
  helloBlock: {
    position: 'absolute',
    bottom: 0,
    height: '55%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  helloText: {
    margin: 32,
    color: 'black',
    fontWeight: '900',
    fontSize: 42,
    opacity: 0.75,
  },
  createAccountButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '85%',
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  createAccountButtonText: {
    fontWeight: '400',
    fontSize: 20,
  },
});
