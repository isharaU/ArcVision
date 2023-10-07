import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ConnectWifi = () => {
  const [obstacle, setObstacle] = useState(null);

  const fetcheValueFromNodeMcu = async () => {
    try {
      const response = await fetch(`http://112.568.698`);
      const data = await response.text();
      setObstacle(data);
    } catch (error) {
      console.log("Error fetching data from ArcVision", error);
    }
  };

  useEffect(() => {
    fetcheValueFromNodeMcu();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ArcVision{obstacle}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={fetcheValueFromNodeMcu}
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
