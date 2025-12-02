import { StyleSheet, Text, View } from 'react-native';

export default function VoiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎤 Voice Assistant</Text>
      <Text style={styles.subtitle}>Speak to manage your farm tasks.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2E7D32' },
  subtitle: { fontSize: 16, marginTop: 10 },
});
