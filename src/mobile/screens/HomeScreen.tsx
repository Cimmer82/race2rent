import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Screen } from '@nativescript/core';
import { CarList } from '../components/CarList';
import { HomeHeader } from '../components/HomeHeader';
import { FilterBar } from '../components/FilterBar';
import { useTheme } from '../theme/ThemeProvider';

export default function HomeScreen() {
  const { colors } = useTheme();
  
  return (
    <Screen style={[styles.container, { backgroundColor: colors.background }]}>
      <HomeHeader />
      <FilterBar />
      <ScrollView>
        <CarList />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});