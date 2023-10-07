import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConnectWifi from './Src/Screens/ConnectWifi';
import Operate from './Src/Screens/Operate';

export default function App() {
  return (
    <View style={styles.container}>
      <Operate />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
