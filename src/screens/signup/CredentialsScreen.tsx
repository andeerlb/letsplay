import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "@components/navigation/signUpNavigator";

type CredentialsScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Credentials'>;

export default function CredentialsScreen({ }: { navigation: CredentialsScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>CredentialsScreen Screen</Text>
        </ScreenWrapper>
    );
}