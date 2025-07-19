import { useTheme } from '@context/ThemeContext';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function ScreenWrapper({ children }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container, {backgroundColor: theme.primary.background},
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
});