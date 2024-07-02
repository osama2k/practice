/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from './src/components/CustomButton';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello World</Text>
      <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonLabel: {
    color: 'white',
    letterSpacing: 1,
  },
});

export default App;
