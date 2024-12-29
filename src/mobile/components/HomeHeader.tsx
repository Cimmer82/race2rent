import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export function HomeHeader() {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Text style={styles.logo}>RENT2RACE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});