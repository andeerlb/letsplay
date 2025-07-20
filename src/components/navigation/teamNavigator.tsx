import { useTheme } from '@hooks/theme';
import { useLingui } from "@lingui/react/macro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTeamScreen from "@screens/team/AddTeamScreen";
import TeamScreen, { TeamScreenHeader } from "@screens/team/TeamScreen";
import { getScreenOptions } from "@components/navigation/rootNavigation";

export type TeamStackParamList = {
  TeamMain: undefined;
  addTeam: undefined;
};

const TeamStack = createNativeStackNavigator<TeamStackParamList>();

function TeamStackNavigator() {
  const { t } = useLingui();
  const { theme } = useTheme();

  return (
    <TeamStack.Navigator>
      <TeamStack.Screen
        name="TeamMain"
        component={TeamScreen}
        options={{
          header: () => <TeamScreenHeader />
        }}
      />
      <TeamStack.Screen
        name="addTeam"
        component={AddTeamScreen}
        options={getScreenOptions(theme, t`TEAM_BOTTOM_MENU`)}
      />
    </TeamStack.Navigator>
  );
}

export default TeamStackNavigator;