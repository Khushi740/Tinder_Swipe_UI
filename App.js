import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from './src/screen/Swipe';
export default function App() {
  return (
    <View style={styles.container}>
      <Swipe/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,}
});
