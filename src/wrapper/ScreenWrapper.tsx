import { useTheme } from "@context/ThemeProvider";
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
        styles.container, { backgroundColor: theme.colors.background },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  }
});