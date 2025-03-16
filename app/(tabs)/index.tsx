import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';

const samplePosts = [
  { 
    id: '1', 
    user: 'Emily', 
    profileImage: require('../../assets/images/dog.jpg'),
    category: 'Exercise', 
    caption: 'Early morning walk 🚶', 
    image: require('../../assets/images/steps.jpg') 
  },
  { 
    id: '2', 
    user: 'Alex', 
    profileImage: require('../../assets/images/cat.jpg'),
    category: 'Reading', 
    caption: 'This book is so good!!!', 
    image: require('../../assets/images/reading.jpg') 
  },
  { 
    id: '3', 
    user: 'Jessica', 
    profileImage: require('../../assets/images/frog.jpg'),
    category: 'Water', 
    caption: 'Loving the healthy lifestyle 🌿✨', 
    image: require('../../assets/images/water.jpg') 
  },
  { 
    id: '4', 
    user: 'Emily', 
    profileImage: require('../../assets/images/dog.jpg'),
    category: 'Exercise', 
    caption: 'Gym day today 🏋️', 
    image: require('../../assets/images/fitness.jpg') 
  },
];

export default function HomeScreen() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [selectedCategory, setSelectedCategory] = useState('All Habits');

  const filteredPosts = selectedCategory === 'All Habits'
    ? samplePosts
    : samplePosts.filter(post => post.category === selectedCategory);

  return (
    <ImageBackground 
      source={require('../../assets/images/home-background.png')}
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>{dateString}</Text>
        <Text style={styles.subtitle}>new you, new me</Text>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          {['All Habits', 'Exercise', 'Water', 'Reading'].map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterButton,
                selectedCategory === category && styles.activeFilter
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={styles.filterText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Posts */}
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image source={item.profileImage} style={styles.profileImage} />
              <Text style={styles.username}>{item.user}</Text>
            </View>

            {/* Post Image */}
            <Image source={item.image} style={styles.postImage} />

            {/* Caption */}
            <Text style={styles.caption}>{item.caption}</Text>

            {/* Category */}
            <Text style={styles.postCategory}>#{item.category}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  filterButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: '#96DF72',
  },
  filterText: {
    color: '#333',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 100,
    paddingTop: 20,
    alignItems: 'center',
  },
  postItem: {
    marginVertical: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    width: 320,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  postImage: {
    width: 320,
    height: 220,
    resizeMode: 'cover',
  },
  caption: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  postCategory: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
});