import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTeamScreen from "@screens/team/AddTeamScreen";
import AddTeamHeader from "@screens/team/AddTeamScreenHeader";
import TeamScreen from "@screens/team/TeamScreen";
import TeamScreenHeader from "@screens/team/TeamScreenHeader";

export type TeamStackParamList = {
  Main: undefined;
  addTeam: undefined;
};

const Stack = createNativeStackNavigator<TeamStackParamList>();

function TeamStackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Main"
        component={TeamScreen}
        options={{
          header: TeamScreenHeader
        }}
      />
      <Stack.Screen
        name="addTeam"
        component={AddTeamScreen}
        options={{
          header: AddTeamHeader,
        }}
      />
    </Stack.Navigator>
  );
}

export default TeamStackNavigator;