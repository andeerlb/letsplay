import { useTheme } from '@context/ThemeProvider';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenScrollWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.rootContainer}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            paddingBottom: safeAreaInsets.bottom
          }
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});