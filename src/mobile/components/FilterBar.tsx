import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const filters = ['All', 'Circle Track', 'Drag Racing', 'Off-Road'];

export function FilterBar() {
  const { colors } = useTheme();
  const [selected, setSelected] = React.useState('All');

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelected(filter)}
            style={[
              styles.filterButton,
              { borderColor: colors.border },
              selected === filter && { backgroundColor: colors.primary },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selected === filter && styles.selectedText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
  },
  selectedText: {
    color: 'white',
  },
});