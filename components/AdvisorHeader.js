
import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from '../src/styles';

export const AdvisorHeader = () => (
  <View>
    <Avatar.Icon
      size={64}
      icon="robot"
      style={styles.avatar}
    />
    <Text variant="headlineLarge" style={styles.title}>
      AI Product Advisor
    </Text>
    <Text variant="titleMedium" style={styles.subtitle}>
      Describe your needs in plain English:
    </Text>
  </View>
);
