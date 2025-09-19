
import React from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { RecommendationCard } from './RecommendationCard';
import { styles } from '../src/styles';

export const RecommendationList = ({ recommendations, loading, onInfoPress }) => {
  if (loading) {
    return <ActivityIndicator animating={true} style={styles.activityIndicator} />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={styles.results}
    >
      {recommendations.length === 0 ? (
        <Text style={styles.noRecommendations}>No recommendations yet</Text>
      ) : (
        recommendations.map((rec, idx) => (
          <RecommendationCard key={idx} rec={rec} onInfoPress={onInfoPress} />
        ))
      )}
    </ScrollView>
  );
};
