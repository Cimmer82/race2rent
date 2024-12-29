import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CarCard } from './CarCard';
import { SAMPLE_CAR } from '../../data/sampleData';

const sampleCars = [
  SAMPLE_CAR,
  { ...SAMPLE_CAR, id: '2', location: 'Knoxville, IA', price: 549 },
  { ...SAMPLE_CAR, id: '3', location: 'Des Moines, IA', price: 499 }
];

export function CarList() {
  return (
    <FlatList
      data={sampleCars}
      renderItem={({ item }) => <CarCard car={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});