import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../src/styles';

export const QueryInput = ({ query, setQuery, fetchRecommendations, loading }) => (
  <View>
    <TextInput
      mode="outlined"
      label="Your Query"
      placeholder="e.g. I need a lightweight laptop for travel"
      value={query}
      onChangeText={setQuery}
      style={styles.input}
    />
    <Button
      mode="contained"
      onPress={fetchRecommendations}
      disabled={!query || loading}
      style={styles.button}
    >
      Find Products
    </Button>
  </View>
);
