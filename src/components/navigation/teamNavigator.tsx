import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTeamScreen from "@screens/team/AddTeamScreen";
import AddTeamHeader from "@screens/team/AddTeamScreenHeader";
import TeamScreen from "@screens/team/TeamScreen";
import TeamScreenHeader from "@screens/team/TeamScreenHeader";

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