import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './components/Auth/auth';

export default function App() {
  return (
    <View style={styles.container}>
      <Auth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04454D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
