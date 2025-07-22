import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontDefinition } from "@constants/theme";
import { useTheme } from '@hooks/theme';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import BackArrowIcon from '@assets/icons/back-arrow.svg';

interface SubPageNavigationHeaderProps extends NativeStackHeaderProps {
  title: string;
}

export default function SubPageNavigationHeader({ navigation, title }: SubPageNavigationHeaderProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();  

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.header, {
      paddingTop: insets.top + 20,
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
      backgroundColor: theme.secondary.background
    }]}>
      {navigation && navigation.canGoBack() ? (
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon width={24} height={24} color={theme.secondary.text} />
        </Pressable>
      ) : null}
      <Text style={[styles.title, { color: theme.secondary.text }]}>{title}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
  },
});