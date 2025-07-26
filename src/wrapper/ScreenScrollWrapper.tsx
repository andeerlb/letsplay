import { useTheme } from '@context/ThemeProvider';
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, useWindowDimensions } from 'react-native';

export default function ScreenScrollWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [contentHeight, setContentHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();

  const showBottomSpace = contentHeight > screenHeight;

  return (
    <ScrollView
      onContentSizeChange={(_, h) => setContentHeight(h)}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background }
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}

      {showBottomSpace && <View style={{ height: 30 }} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});