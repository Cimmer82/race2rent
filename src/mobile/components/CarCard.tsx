import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import type { RaceCar } from '../../types';

interface CarCardProps {
  car: RaceCar;
}

export function CarCard({ car }: CarCardProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: 'white', borderColor: colors.border }]}
    >
      <Image source={{ uri: car.images[0] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{`${car.year} ${car.make} ${car.model}`}</Text>
        <Text style={styles.price}>${car.price}/day</Text>
        <Text style={styles.location}>{car.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#ea580c',
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#64748b',
  },
});