import { useState } from 'react';
import { Alert } from 'react-native';
import { OpenAI } from 'openai';
import { PRODUCT_CATALOG } from '../catalog';

// Consider using environment variables or a secure method to manage API keys.
const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // Replace with your API key
  dangerouslyAllowBrowser: true, // Allows usage in Expo Snack or browser envs - Use with caution
});

const UI_CONSTANTS = {
  PROMPT_FIRST: "You are an AI Product Advisor. Given the following product catalog and a user's query, recommend the best matching products and explain why you chose them. Product Catalog:",
  PROMPT_SECOND: "Respond with a JSON array of recommended products, each including product_name, brand, category, price, description, and a 'why' field explaining the recommendation.",
};

export const useProductRecommendations = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    if (!query.trim()) {
      console.log('Empty query, skipping fetch');
      return;
    }
    setLoading(true);
    setRecommendations([]);

    try {
      const prompt = `${UI_CONSTANTS.PROMPT_FIRST}${JSON.stringify(PRODUCT_CATALOG)}User Query:${query}${UI_CONSTANTS.PROMPT_SECOND}`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      });

      const textResponse = response.choices?.[0]?.message?.content || '';
      const jsonMatch = textResponse.replace(/```json\s*|```\s*/gs, '');

      if (!jsonMatch) {
        Alert.alert('Parse Error', 'Response does not include JSON data.');
        return;
      }

      const jsonString = jsonMatch.trim();
      const recommendationsArr = JSON.parse(jsonString);
      setRecommendations(recommendationsArr);

    } catch (error) {
      console.error('Error fetching recommendations:', error);
      Alert.alert('Error', 'Failed to fetch recommendations. ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { query, setQuery, recommendations, loading, fetchRecommendations };
};
