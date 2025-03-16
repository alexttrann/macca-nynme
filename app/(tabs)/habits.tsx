import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';

type MarkedDateProps = {
  marked?: boolean;
  dotColor?: string;
  customStyles?: {
    container?: object;
  };
};

export default function HabitsScreen() {
  const [completedDays, setCompletedDays] = useState<Record<string, MarkedDateProps>>({});

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = today.getDate();

    const days: Record<string, MarkedDateProps> = {};
    for (let day = 1; day <= date; day++) {
      const dayStr = `${year}-${month}-${String(day).padStart(2, '0')}`;
      days[dayStr] = {
        marked: true,
        dotColor: '#96DF72',
        customStyles: {
          container: { borderWidth: 2, borderColor: '#96DF72', borderRadius: 999 },
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
          markingType={'custom'}
          markedDates={completedDays}
          style={styles.calendar}
          theme={{
            selectedDayBackgroundColor: '#96DF72',
            todayTextColor: '#96DF72',
            calendarBackground: 'rgba(255,255,255,0.7)',
          }}
        />
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
    paddingTop: 60,
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
  },
});
