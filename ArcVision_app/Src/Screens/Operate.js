import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Modal, Button } from "react-native";
import { sendLocationSMS } from "../Components/SendSms";
import { setNumberFunction } from "../Components/SetNumber";

const Operate = () => {
  const [obstacle, setObstacle] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true);
  };

  const handleSaveNumber = () => {
    console.log("Phone number entered:", phoneNumber);
    setNumberFunction(phoneNumber);
    setPhoneNumber('');
    setModalVisible(false);
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
          <Text style={styles.buttonText}>EMERGENCY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.setbutton}
          onPress={handleSettingsPress}>
          <Text style={styles.buttonText}>SET NUMBER</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter New Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <Button
              title="Save Number"
              onPress={handleSaveNumber}
            />
          </View>
        </Modal>

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

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
  },

  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});

export default Operate;
