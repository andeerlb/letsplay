import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CredentialsScreen from "@screens/signup/CredentialsScreen";
import PersonScreen from "@screens/signup/PersonScreen";
import SportScreen from "@screens/signup/SportScreen";

export type SignUpStackParamList = {
  Person: undefined,
  Sport: undefined;
  Credentials: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Person"
        component={PersonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sport"
        component={SportScreen}
      />
      <Stack.Screen
        name="Credentials"
        component={CredentialsScreen}
      />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;