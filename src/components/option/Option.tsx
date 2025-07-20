import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OPTIONS = ['Dark', 'Light', 'System'];

export default function OptionSelector({ selectedOption, onSelect }) {
  return (
    <View style={styles.container}>
      {OPTIONS.map(option => {
        const isSelected = option === selectedOption;
        return (
          <TouchableOpacity
            key={option}
            style={[styles.option, isSelected && styles.selectedOption]}
            onPress={() => onSelect(option)}
            activeOpacity={0.7}
          >
            <Text style={[styles.optionText, isSelected && styles.selectedText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#666',
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    color: 'white',
  },
});
