import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import { Colors, Matrics } from '../constants';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  title: {
    fontSize: Matrics.mvs(30),
    color: Colors.black,
    textAlign: 'center'
  },
});

export default memo(WelcomeScreen);
