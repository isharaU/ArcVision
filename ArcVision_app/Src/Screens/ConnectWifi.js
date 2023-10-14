import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ConnectWifi = () => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const navigation = useNavigation();

  const fetchDataFromArcVision = async () => {
    try {
      const response = await fetch('http://192.168.43.168/trigger'); // Updated URL
      console.log(response);
      if (response.ok) {
        setConnectionStatus(true); // Set the connection status to true
        console.log("Connected to ArcVision");

        // Navigate to the LoadingScreen
        navigation.navigate("LoadingScreen");
      } else {
        console.log("Response not okay. Status code: ", response.status);
      }
    } catch (error) {
      console.log("Error connecting to ArcVision", error);
    }
  };

  useEffect(() => {
    fetchDataFromArcVision();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {connectionStatus ? "Connected" : "Not Connected"}
      </Text>
      <TouchableOpacity style={styles.button} onPress={fetchDataFromArcVision}>
        <Text style={styles.buttonText}>CONNECT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  header: {
    fontSize: 50,
    color: "#333333",
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ConnectWifi;
