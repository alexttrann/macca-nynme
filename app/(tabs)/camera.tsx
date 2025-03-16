import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function NotificationsScreen() {
  const habits = ['Exercise Daily', 'Read 10 pages', 'Drink Water'];

  return (
    <ImageBackground 
      source={require('../../assets/images/home-background.png')} 
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        {/* Top title/header */}
        <View style={styles.header}>
          <Text style={styles.title}>Post a habit</Text>
        </View>

        {/* Habit buttons */}
        <View style={styles.habitContainer}>
          {habits.map((habit, index) => (
            <TouchableOpacity key={index} style={styles.habitButton}>
              <Text style={styles.habitText}>{habit}</Text>
            </TouchableOpacity>
          ))}

          {/* Customise button */}
          <TouchableOpacity style={styles.customiseButton}>
            <Text style={styles.customiseText}>Customise</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Center everything vertically
    alignItems: 'center',
  },

  header: {
    marginBottom: 20, // Space between header & buttons
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  habitContainer: {
    alignItems: 'center',
  },

  habitButton: {
    width: 300, 
    backgroundColor: '#C6F1A1',
    borderRadius: 22,
    padding: 15,
    marginBottom: 15,
  },

  habitText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
  },

  customiseButton: {
    width: 200, 
    backgroundColor: '#8CD660',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4,
    elevation: 5, 
  },

  customiseText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
