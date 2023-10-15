import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';

export function sendSMS() {
  return async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        ['+94770756891'],
        'Could you come to get me. I am at the location 6.9271° N, 79.8612° E'
      );
      if (result) {
        console.log('SMS sent successfully.');
      } else {
        console.error('Failed to send SMS.');
      }
    } else {
      console.error('SMS functionality is not available on this device.');
    }
  };
}

const SendSMS = () => {
  return (
    <View style={styles.container}>
      <Button title="Send SMS" onPress={sendSMS()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SendSMS;
