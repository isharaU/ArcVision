import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView , TextInput } from "react-native";
import {sendLocationSMS} from "../Components/SendSms";

const Operate = () => {
  const [obstacle, setObstacle] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const fetcheValueFromNodeMcu = async () => {
    try {
      const response = await fetch(`http://192.168.43.168`);
      const data = await response.text();
      setObstacle("\n"+data);
      
    } catch (error) {
      console.log("Error fetching data from ArcVision", error);
    }
  };

  const handleSettingsPress = () => {
    // Handle the user's input here
    console.log("Phone number entered:", phoneNumber);
    // You can perform any further actions with the phone number here, e.g., send it to another file.

    // Clear the input field after pressing the button
    setPhoneNumber('');
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
          onPress={sendLocationSMS()}>
          <Text style={styles.buttonText}>EMEGERNCY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.setbutton}
          onPress={handleSettingsPress}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>

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
