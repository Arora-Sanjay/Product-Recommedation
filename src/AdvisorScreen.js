import React, { useState } from 'react';
import { View, Appearance } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useProductRecommendations } from './hooks/useProductRecommendations';
import { AdvisorHeader } from '../components/AdvisorHeader';
import { QueryInput } from '../components/QueryInput';
import { RecommendationList } from '../components/RecommendationList';
import { InfoDialog } from '../components/infoDialog';
import { styles } from './styles';

const AdvisorScreen = () => {
  const { query, setQuery, recommendations, loading, fetchRecommendations } = useProductRecommendations();
  const [infoVisible, setInfoVisible] = useState(false);
  const [selectedWhy, setSelectedWhy] = useState('');

  const showInfo = (whyText) => {
    setSelectedWhy(whyText);
    setInfoVisible(true);
  };

  const hideInfo = () => setInfoVisible(false);

  if (!Appearance.removeChangeListener) {
    Appearance.removeChangeListener = () => {};
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <AdvisorHeader />
        <QueryInput
          query={query}
          setQuery={setQuery}
          fetchRecommendations={fetchRecommendations}
          loading={loading}
        />
        <RecommendationList
          recommendations={recommendations}
          loading={loading}
          onInfoPress={showInfo}
        />
        <InfoDialog
          visible={infoVisible}
          onDismiss={hideInfo}
          whyText={selectedWhy}
        />
      </View>
    </PaperProvider>
  );
};

export default AdvisorScreen;
