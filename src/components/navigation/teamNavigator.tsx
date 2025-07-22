import { useTheme } from '@hooks/theme';
import { useLingui } from "@lingui/react/macro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTeamScreen from "@screens/team/AddTeamScreen";
import TeamScreen, { TeamScreenHeader } from "@screens/team/TeamScreen";
import SubPageNavigationHeader from '@components/navigation/SubPageNavigationHeader';

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
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: (props) => <SubPageNavigationHeader {...props} title={t`SETTING_SCREEN_TITLE`}/>
        }}
      />
    </TeamStack.Navigator>
  );
}

export default TeamStackNavigator;