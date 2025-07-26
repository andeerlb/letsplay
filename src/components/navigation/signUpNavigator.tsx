import { useTheme } from '@context/ThemeProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CredentialsScreen from '@screens/signup/CredentialsScreen';
import MoreSportsScreen, { MoreSportsScreenRef } from '@screens/signup/MoreSportScreen';
import PersonScreen, { PersonScreenRef } from '@screens/signup/PersonScreen';
import SignUpScreenHeaderWrapper from '@screens/signup/ScreenHeader';
import SportScreen, { SportScreenRef } from '@screens/signup/SportScreen';
import React, { useRef } from 'react';

export type SignUpStackParamList = {
  Person: undefined,
  Sport: undefined;
  MoreSports: undefined;
  Credentials: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  const personScreenRef = useRef<PersonScreenRef>(null);
  const sportScreenRef = useRef<SportScreenRef>(null);
  const moreSportsScreenRef = useRef<MoreSportsScreenRef>(null);
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Person"
        options={{
          header: (props) => (
            <SignUpScreenHeaderWrapper
              {...props}
              onNext={() => personScreenRef.current?.submitForm()}
            />
          ),
        }}
      >
        {(props) => <PersonScreen {...props} ref={personScreenRef} />}
      </Stack.Screen>
      <Stack.Screen
        name="Sport"
        options={{
          header: (props) => (
            <SignUpScreenHeaderWrapper
              {...props}
              onNext={() => sportScreenRef.current?.submitForm()}
            />
          ),
        }}
      >
        {(props) => <SportScreen {...props} ref={sportScreenRef} />}
      </Stack.Screen>
      <Stack.Screen
        name="MoreSports"
        options={{
          header: (props) => (
            <SignUpScreenHeaderWrapper
              {...props}
              onNext={() => moreSportsScreenRef.current?.submitForm()}
            />
          ),
        }}
      >
        {(props) => <MoreSportsScreen {...props} ref={moreSportsScreenRef} />}
      </Stack.Screen>
      <Stack.Screen name="Credentials" component={CredentialsScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;