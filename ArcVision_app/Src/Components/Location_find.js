import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


export default function LocationInfo() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Latitude: {location ? location.coords.latitude : 'Loading...'}
      </Text>
      <Text style={styles.text}>
        Longitude: {location ? location.coords.longitude : 'Loading...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export const getLatitude = (location) => {
    return location ? location.coords.latitude : null;
  };
  
  export const getLongitude = (location) => {
    return location ? location.coords.longitude : null;
  }
