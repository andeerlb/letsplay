import AddIcon from '@assets/icons/plus.svg';
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useTheme } from "@context/ThemeProvider";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable } from "react-native";

const TeamScreenHeader = ({ navigation }: NativeStackHeaderProps) => {
  const { theme } = useTheme();
  const { t } = useLingui();

  return (
    <MainPageNavigationHeader title={t`screen.team.title`}>
      <Pressable onPress={() => navigation.navigate('Add')}>
        <AddIcon width={24} height={24} color={theme.navigation.inactive} />
      </Pressable>
    </MainPageNavigationHeader>
  );
}

const TeamScreenHeaderWrapper = (props: NativeStackHeaderProps) => {
  return (
    <TeamScreenHeader {...props} />
  )
}

export default TeamScreenHeaderWrapper;