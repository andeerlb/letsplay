import { FontDefinition } from '@constants/theme';
import { useTheme } from '@hooks/theme';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Toggle({ label }) {
  const { theme } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: theme.primary.text }]}>{label}</Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: '#ccc', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#007aff' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
