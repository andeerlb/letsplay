import { SignUpStackParamList } from "@components/navigation/signUpNavigator";
import { useSignUp } from "@context/SignUpProvider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React, { useEffect } from "react";
import { Text } from "react-native";

type CredentialsScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Credentials'>;

export default function CredentialsScreen({ }: { navigation: CredentialsScreenNavigationProp }) {
    const signUpContext = useSignUp();

    useEffect(() => {
        console.log(signUpContext);
    }, [signUpContext])

    return (
        <ScreenWrapper>
            <Text>CredentialsScreen Screen</Text>
        </ScreenWrapper>
    );
}