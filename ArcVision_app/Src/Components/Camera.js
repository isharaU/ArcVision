import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const Operate = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const fetcheValueFromNodeMcu = async () => {
    if (hasCameraPermission) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
    } else {
      console.log('No access to camera');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ArcVision</Text>

      <ScrollView>
        <TouchableOpacity
          style={styles.cambutton}
          onPress={fetcheValueFromNodeMcu}>
          <Text style={styles.buttonText}>CAMERA</Text>
        </TouchableOpacity>

    
      </ScrollView>

      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles...
});

export default Operate;