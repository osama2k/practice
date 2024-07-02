import {Alert, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const CustomButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() =>
        Alert.alert(
          'This is an alert!',
          'This is the description of the alert',
          [
            {
              text: 'Custom Okay',
              isPreferred: true,
            },
          ],
          {
            userInterfaceStyle: 'dark',
          },
        )
      }>
      <Text style={styles.buttonLabel}>Click Me too</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
