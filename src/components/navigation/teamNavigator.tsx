import { useLingui } from "@lingui/react/macro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTeamScreen, { AddTeamHeader } from "@screens/team/AddTeamScreen";
import TeamScreen, { TeamScreenHeader } from "@screens/team/TeamScreen";

export type TeamStackParamList = {
  TeamMain: undefined;
  addTeam: undefined;
};

const TeamStack = createNativeStackNavigator<TeamStackParamList>();

function TeamStackNavigator() {
  return (
    <TeamStack.Navigator>
      <TeamStack.Screen
        name="TeamMain"
        component={TeamScreen}
        options={{
          header: TeamScreenHeader
        }}
      />
      <TeamStack.Screen
        name="addTeam"
        component={AddTeamScreen}
        options={{
          header: AddTeamHeader
        }}
      />
    </TeamStack.Navigator>
  );
}

export default TeamStackNavigator;