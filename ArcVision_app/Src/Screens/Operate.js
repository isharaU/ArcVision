import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ConnectWifi = () => {
  const [obstacle, setObstacle] = useState(null);

  const fetcheValueFromNodeMcu = async () => {
    try {
      const response = await fetch(`http://192.168.43.168`);
      const data = await response.text();
      setObstacle("\n"+data);
      
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
        style={styles.cambutton}
        onPress={fetcheValueFromNodeMcu}>
        <Text style={styles.buttonText}>CAMERA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.emgbutton}
        onPress={fetcheValueFromNodeMcu}>
        <Text style={styles.buttonText}>EMEGERNCY</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.setbutton}
        onPress={fetcheValueFromNodeMcu}>
        <Text style={styles.buttonText}>SETTINGS</Text>
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
    justifyContent: "flex-start",
  },

  header: {
    fontSize: 50,
    color: "#333333",
    fontWeight: "bold",
    marginTop: 90,
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

export default ConnectWifi;
