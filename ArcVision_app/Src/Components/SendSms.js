import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';

export function sendLocationSMS() {
  return async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      const message = `Could you come to get me. I am at the location ${locationData.coords.latitude}° N, ${locationData.coords.longitude}° E`;
      
      const { result } = await SMS.sendSMSAsync(
        ['+94770756891'],
        message
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

const SendLocationSMS = () => {
  return (
    <View style={styles.container}>
      <Button title="Send Location via SMS" onPress={sendLocationSMS()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SendLocationSMS;
