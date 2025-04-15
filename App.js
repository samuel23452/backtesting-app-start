import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TradingViewWidget from './TradingViewWidget';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TradingViewWidget />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
