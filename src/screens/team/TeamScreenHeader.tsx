import { useLingui } from "@lingui/react/macro";
import { Pressable } from "react-native";
import AddIcon from '@assets/icons/plus.svg';
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useTheme } from '@hooks/theme';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const TeamScreenHeader = ({ navigation }: NativeStackHeaderProps) => {
  const { theme } = useTheme();
  const { t } = useLingui();

  return (
    <MainPageNavigationHeader title={t`screen.team.title`}>
      <Pressable onPress={() => {
        console.log("click");
        navigation.getParent()?.navigate('Team', { screen: 'Add' });
      }}>
        <AddIcon width={24} height={24} color={theme.primary.button} />
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