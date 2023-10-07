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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., data fetching) here
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the task is done
    }, 3000); // Simulate a 3-second loading time
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

export default App;
