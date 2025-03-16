import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={require('../../assets/images/home-background.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>🐸 Nynme! 🌿</Text>
        <Text style={styles.subtitle}>new you, new me</Text>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#96DF72',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#666',
    marginTop: 10, 
  },
});
