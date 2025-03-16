import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


export default function NotificationsScreen() {
  const habits = ['Exercise Daily', 'Read 10 pages', 'Drink Water', 'Meditate'];

  return (
    <ImageBackground 
      source={require('../../assets/images/home-background.png')} 
      style={styles.container}
    >
      {/* Semi-transparent green overlay */}
      <View style={styles.overlay}>
        
        {/* Top title/header */}
        <View style={styles.header}>
          <Text style={styles.title}>Post a habit</Text>
        </View>

        {/* Habit buttons + customise button in the middle */}
        <View style={styles.habitContainer}>
          {habits.map((habit, index) => (
            <TouchableOpacity key={index} style={styles.habitButton}>
              <Text style={styles.habitText}>{habit}</Text>
            </TouchableOpacity>
          ))}

          {/* Customise button - kept smaller */}
          <TouchableOpacity style={styles.customiseButton}>
            <Text style={styles.customiseText}>Customise</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Full screen background image
  container: {
    flex: 1,
  },

  // Green overlay with lighter opacity
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(168, 232, 139, 0.65)', // made lighter (0.65 instead of 0.85)
  },

  // Top header area
  header: {
    paddingTop: 70, // space from top
    paddingBottom: 20,
    alignItems: 'center',
  },

  // Header title text styling
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },

  // Container for habit buttons + customise button
  habitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Habit buttons (wider, nearly edge-to-edge)
  habitButton: {
    width: '92%', // wide buttons, small margins on edges
    backgroundColor: '#C6F1A1',
    borderRadius: 22,
    padding: 15,
    marginBottom: 15,
  },

  // Text inside habit buttons
  habitText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
  },

  // Customise button (smaller, original size)
  customiseButton: {
    width: 200, // smaller width
    backgroundColor: '#8CD660',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // drop shadow
    shadowOpacity: 0.25, // 25% opacity
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },

  // Text inside customise button
  customiseText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});