import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import Operate from './Operate'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#333333" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const Load = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View>
          {/* Your main content goes here */}
          <Operate />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#E6E6FA",
    width:"100%"
  },
  loadingText: {
    marginTop: 10,
    color: "#333333",
  },
});

export default Load;
