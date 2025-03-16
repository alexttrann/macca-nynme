import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/home-background.png')}
      style={styles.container}
    >
      {/* Header Title */}
      <Text style={styles.headerText}>Profile</Text>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/cat.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>Alex</Text>
        <Text style={styles.usernameText}>@alexcat</Text>
      </View>

      {/* Options Block with White Transparent Background */}
      <View style={styles.optionsWrapper}>
      <Option icon="person" text="My Habits " onPress={() => router.push('/(tabs)/habits')} />
        <Option icon="home" text="Privacy Settings" />
        <Option icon="notifications" text="Notifications" />
        <Option icon="security" text="Help" />
        <Option icon="language" text="Languages" />
      </View>
    </ImageBackground>
  );
}

// Option row component
const Option = ({ icon, text, onPress }: { icon: string; text: string; onPress?: () => void }) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress}>
    <View style={styles.optionLeft}>
      <MaterialIcons name={icon as any} size={24} color="black" />
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="black" />
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30, 
    paddingHorizontal: 20,
  },
  headerText: {

    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
  },
  nameText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameText: {
    color: '#555',
    marginTop: 5,
  },
  optionsWrapper: {
    backgroundColor: '#ffff', 
    borderRadius: 20, 
    padding: 13,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

