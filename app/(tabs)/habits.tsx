import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

type MarkedDateProps = {
  dots?: { key: string; color: string }[];
  customStyles?: {
    container?: object;
    text?: object;
  };
};

export default function HabitsScreen() {
  const [completedDays, setCompletedDays] = useState<Record<string, MarkedDateProps>>({});

  const habits = [
    { name: 'Exercise', color: '#FF6B6B' },
    { name: 'Reading', color: '#4ECDC4' },
    { name: 'Water', color: '#FFD93D' },
  ];

  const habitStreaks = [
    { id: '1', habit: 'Exercise Daily', streak: 34, color: '#FF6B6B' },
    { id: '2', habit: 'Read 1 Chapter', streak: 24, color: '#4ECDC4' },
    { id: '3', habit: 'Drink Water', streak: 45, color: '#FFD93D' },
  ];

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = today.getDate();

    const days: Record<string, MarkedDateProps> = {};

    for (let day = 1; day <= date; day++) {
      const dayStr = `${year}-${month}-${String(day).padStart(2, '0')}`;


      days[dayStr] = {
        dots: habits.map(habit => ({
          key: habit.name,
          color: habit.color,
        })),
        customStyles: {
          container: {
            borderWidth: 4,
            borderColor: '#96DF72',
            borderRadius: 999,
            justifyContent: 'center',
            alignItems: 'center',
          },
          text: { color: '#333' },
        },
      };
    }

    setCompletedDays(days);
  }, []);

  return (
    <ImageBackground 
      source={require('../../assets/images/background.png')} 
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Habit Streak Calendar</Text>
        <Calendar
          markingType={'multi-dot'}
          markedDates={completedDays}
          style={styles.calendar}
          theme={{
            selectedDayBackgroundColor: '#96DF72',
            todayTextColor: '#96DF72',
            calendarBackground: '#ffffff',
          }}
        />

        {}
        <View style={styles.listContainer}>
          <FlatList
            data={habitStreaks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.habitLeft}>
                  {}
                  <View style={[styles.colorDot, { backgroundColor: item.color }]} />
                  <Text style={styles.habitText}>{item.habit}</Text>
                </View>

                <View style={styles.streakInfo}>
                  <Text style={styles.streakText}>{item.streak} days</Text>
                  <Image source={require('../../assets/images/fire.png')} style={styles.fireIcon} />
                </View>
              </View>
            )}
          />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  calendar: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  },
  listContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    elevation: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  habitLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  habitText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  streakInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  fireIcon: {
    width: 20,
    height: 20,
  },
});
