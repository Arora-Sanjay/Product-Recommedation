import React from 'react';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { styles } from '../src/styles';

export const RecommendationCard = ({ rec, onInfoPress }) => (
  <Card mode="elevated" style={styles.card}>
    <Card.Title
      title={rec.product_name}
      subtitle={`${rec.brand} • ${rec.category}`}
      left={(props) => (
        <Avatar.Text {...props} label={rec.product_name?.[0] || 'P'} />
      )}
      right={(props) => (
        <IconButton
          {...props}
          icon="information"
          onPress={() => onInfoPress(rec.why)}
          accessibilityLabel="Show recommendation reason"
        />
      )}
    />
    <Card.Content>
      <Text style={styles.price}>Price: ₹{rec.price.toLocaleString()}</Text>
      <Text style={styles.description}>{rec.description}</Text>
    </Card.Content>
  </Card>
);
