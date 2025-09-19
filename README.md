# AI Product Advisor

An intelligent mobile app built with React Native that uses OpenAI's powerful language model to recommend products. Just describe what you need, and our AI will find the best match from a product catalog and explain its choices.

**Features**

  * Intelligent Recommendations: Get product suggestions based on natural language queries.
  * AI-Powered Explanations: Understand why a product was recommended.
  * Clean UI: A user-friendly interface powered by react-native-paper.

**Getting Started**

Install dependencies: 
  * npm install.
  * Add your OpenAI API key: Insert your API key in **src/hooks/useProductRecommendations.js**.
  * Run the app: **npm run ios** or **npm run android**.
Note: This demo uses an insecure method for handling the API key. For a production environment, use a backend proxy.

**Tech Stack**

  * React Native
  * OpenAI API
  * react-native-paper

**How to Use**

  * Type your needs into the search bar (e.g., "A lightweight laptop for travel").
  * Tap "Find Products".
  * View the recommendations and tap the info icon to see the AI's reasoning.

**Future Improvements**
  * Secure API Key Management: Transition to a more secure method for handling the OpenAI API key, such as using a proxy backend.
  * Persistent State: Implement a state management solution (e.g., Redux Toolkit, Zustand) to persist recommendations across sessions.
  * Better Error Handling: Provide more informative error messages to the user for different failure scenarios.
  * User Authentication: Add user accounts to save search history and personalized preferences.
  * Product Details: Enhance the app with detailed product views, including specifications and images.