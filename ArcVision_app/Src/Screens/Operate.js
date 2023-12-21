import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import SettingsScreen from '../Components/SetNumber';
import { sendLocationSMS } from "../Components/SendSms";

const Operate = () => {
  const [obstacle, setObstacle] = useState(null);
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const fetcheValueFromNodeMcu = async () => {
    try {
      const response = await fetch(`http://192.168.43.168`);
      const data = await response.text();
      setObstacle("\n" + data);
    } catch (error) {
      console.log("Error fetching data from ArcVision", error);
    }
  };

  const handleSettingsPress = () => {
    setSettingsModalVisible(true);
  };

  const handleSaveNumber = (number) => {
    console.log("Phone number entered:", number);
    setPhoneNumber(number);
  };

  useEffect(() => {
    fetcheValueFromNodeMcu();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ArcVision{obstacle}</Text>

      <ScrollView>
      
        <TouchableOpacity
          style={styles.cambutton}
          onPress={fetcheValueFromNodeMcu}>
          <Text style={styles.buttonText}>CAMERA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.emgbutton}
          onPress={sendLocationSMS(phoneNumber)}>
          <Text style={styles.buttonText}>EMERGENCY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.setbutton}
          onPress={handleSettingsPress}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>

        <SettingsScreen
          isVisible={isSettingsModalVisible}
          onClose={() => setSettingsModalVisible(false)}
          onSaveNumber={handleSaveNumber}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    fontSize: 50,
    color: "#333333",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 90,
    textAlign: "center",
  },

  cambutton: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 40,
  },

  setbutton: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 85,
    borderRadius: 5,
  },

  emgbutton: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 76,
    borderRadius: 5,
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Operate;
