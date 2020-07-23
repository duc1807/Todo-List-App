
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

//Import Bottom Tab Navigation
import BotTabNavigation from './src/navigation/BotTabNavigation';

export default function App() {
  return (
      <BotTabNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
