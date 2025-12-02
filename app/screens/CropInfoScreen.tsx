import { StyleSheet, Text, View } from 'react-native';

export default function CropInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌾 Crop Information</Text>
      <Text style={styles.subtitle}>Crop details will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2E7D32' },
  subtitle: { fontSize: 16, marginTop: 10 },
});
