import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ConnectWifi = () => {
  const [obstacle, setObstacle] = useState(null);
  const navigation = useNavigation();

  const fetchDataFromESP8266 = async () => {
    console.log("1");
    try {
      const response = await fetch('http://192.168.43.202/sendData');
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        setObstacle(data);
        console.log("Retrieved Data");
  
        if (data !== null) {
          navigation.navigate("LoadingScreen");
        }
      } else {
        console.log("Response not okay. Status code: ", response.status);
      }
    } catch (error) {
      console.log("Error fetching data from ESP8266", error);
    }
  };

  useEffect(() => {
    fetchDataFromESP8266();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome {obstacle}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={fetchDataFromESP8266}
      >
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
