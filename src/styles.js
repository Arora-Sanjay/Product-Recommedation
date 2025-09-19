import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f3f6fc' },
  avatar: { alignSelf: 'center', marginBottom: 12 },
  title: { textAlign: 'center', marginBottom: 8, color: '#1e293b' },
  subtitle: { textAlign: 'center', marginBottom: 16, color: '#475569' },
  input: { marginBottom: 12 },
  button: { marginBottom: 12 },
  activityIndicator: { marginTop: 20 },
  results: { marginTop: 10, flex: 1 },
  scrollContent: { paddingBottom: 20 },
  card: { marginBottom: 16, elevation: 4 },
  price: { marginBottom: 8, fontWeight: 'bold', color: '#2c3e50' },
  description: { marginBottom: 8, color: '#555' },
  noRecommendations: { textAlign: 'center', marginTop: 20, color: '#666' },
});
