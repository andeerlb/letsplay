import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "@components/navigation/signUpNavigator";

type PersonScreenScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Person'>;

export default function PersonScreen({ }: { navigation: PersonScreenScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>PersonScreen Screen</Text>
        </ScreenWrapper>
    );
}