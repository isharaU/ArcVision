import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';

export function sendLocationSMS(phoneNumber) {
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
        [phoneNumber],
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
  const [phoneNumber, setPhoneNumber] = useState('+94770756891'); // Initial phone number

  return (
    <View style={styles.container}>
      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button title="Send Location via SMS" onPress={sendLocationSMS(phoneNumber)} />
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