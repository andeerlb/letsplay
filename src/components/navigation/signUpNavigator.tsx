/* eslint-disable react/no-unstable-nested-components */
import { SignUpProvider } from '@context/SignUpProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CredentialsScreen from '@screens/signup/CredentialsScreen';
import MoreSportsScreen, { MoreSportsScreenRef } from '@screens/signup/MoreSportScreen';
import PersonScreen, { PersonScreenRef } from '@screens/signup/PersonScreen';
import SignUpScreenHeaderWrapper from '@screens/signup/ScreenHeader';
import SportScreen, { SportScreenRef } from '@screens/signup/SportScreen';
import { SignUpStackParamList } from '@types/navigation';
import React, { useRef } from 'react';

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  const personScreenRef = useRef<PersonScreenRef>(null);
  const sportScreenRef = useRef<SportScreenRef>(null);
  const moreSportsScreenRef = useRef<MoreSportsScreenRef>(null);

  return (
    <SignUpProvider>
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
            header: (props) => <SignUpScreenHeaderWrapper {...props} position='absolute' transparent={true} />
          }}
        />
      </Stack.Navigator>
    </SignUpProvider>
  );
}

export default SignUpStackNavigator;