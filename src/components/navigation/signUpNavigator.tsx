import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonScreen, { PersonScreenRef } from '@screens/signup/PersonScreen';
import PersonScreenHeaderWrapper from '@screens/signup/header/PersonScreenHeader';
import SportScreen, { SportScreenRef } from '@screens/signup/SportScreen';
import CredentialsScreen from '@screens/signup/CredentialsScreen';
import SportScreenHeaderWrapper from '@screens/signup/header/SportScreenHeader';
import { useTheme } from '@context/ThemeProvider';

export type SignUpStackParamList = {
  Person: undefined,
  Sport: undefined;
  Credentials: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  const personScreenRef = useRef<PersonScreenRef>(null);
  const sportScreenRef = useRef<SportScreenRef>(null);
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Person"
        options={{
          header: (props) => (
            <PersonScreenHeaderWrapper
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
            <SportScreenHeaderWrapper
              {...props}
              onNext={() => sportScreenRef.current?.submitForm()}
            />
          ),
        }}
      >
        {(props) => <SportScreen {...props} ref={sportScreenRef} />}
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