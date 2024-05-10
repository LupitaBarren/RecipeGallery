import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.sectionTitle}>Recipe Gallery</Text>
      </View>

      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  headerWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },
});
