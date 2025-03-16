import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';

export default function LeaderboardScreen() {
  const leaderboardData = [
    { id: '1', name: 'Emily', days: 45, profile: require('../../assets/images/dog.jpg') },
    { id: '2', name: 'Alex', days: 36, profile: require('../../assets/images/cat.jpg') },
    { id: '3', name: 'Jessica', days: 25, profile: require('../../assets/images/frog.jpg') },
  ];
  


  return (
    <ImageBackground 
      source={require('../../assets/images/home-background.png')} 
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
      </View>

      {/* Stools */}
      <View style={styles.stoolContainer}>
        {/* Second Place Stool */}
        <View style={[styles.stool, styles.secondStool]}>
          <Image 
            source={require('../../assets/images/cat.jpg')} 
            style={[styles.pfp, styles.silverBorder]} 
          />
        </View>

        {/* First Place Stool */}
        <View style={[styles.stool, styles.firstStool]}>
          <Image 
            source={require('../../assets/images/dog.jpg')} 
            style={[styles.pfp, styles.goldBorder]} 
          />
          <Image source={require('../../assets/images/crown.png')} style={styles.crown} />
        </View>

        {/* Third Place Stool */}
        <View style={[styles.stool, styles.thirdStool]}>
          <Image 
            source={require('../../assets/images/frog.jpg')} 
            style={[styles.pfp, styles.bronzeBorder]} 
          />
        </View>
      </View>

      {/* Leaderboard List */}
      <View style={styles.listContainer}>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Image 
              source={item.profile} 
              style={styles.listPfp} 
            />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.daysContainer}>
              <Text style={styles.days}>{item.days} days</Text>
              <Image source={require('../../assets/images/fire.png')} style={styles.fireIcon} />
            </View>
          </View>
        )}
      />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8E88B',
  },

  header: {
    paddingTop: 60,
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 24, 
    fontWeight: '700',
  },

  stoolContainer: {
    flexDirection: 'row',
    top: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: -10,
  },

  stool: {
    width: 135, // Wider
    marginHorizontal: -12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
    position: 'relative',
  },

  secondStool: {
    height: 110,
    zIndex: 1,
    backgroundColor: '#85CB62',
  },
  firstStool: {
    height: 155,
    zIndex: 2,
    backgroundColor: '#60BA33',
  },
  thirdStool: {
    height: 90,
    zIndex: 0,
    backgroundColor: '#69AB48',
  },

  // Profile pics
  pfp: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    position: 'absolute',
    top: -32,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },

  silverBorder: {
    borderColor: '#C0C0C0',
    borderWidth: 3,
  },
  goldBorder: {
    borderColor: '#FFD700',
    borderWidth: 4,
  },
  bronzeBorder: {
    borderColor: '#CD7F32',
    borderWidth: 3,
  },

  crown: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: -50,
  },

  // Leaderboard List 
  listContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 25,
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 100, 

  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  rank: {
    fontSize: 18,
    width: 25,
  },

  listPfp: {
    width: 45, 
    height: 45,
    borderRadius: 22.5,
    marginHorizontal: 12,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },

  name: {
    flex: 1,
    fontSize: 18, 
  },

  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  days: {
    fontSize: 16,
    marginRight: 6,
  },

  fireIcon: {
    width: 24, 
    height: 24,
  },
});