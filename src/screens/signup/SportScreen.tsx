import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "@components/navigation/signUpNavigator";

type SportScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Sport'>;

export default function SportScreen({ }: { navigation: SportScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>SportScreen Screen</Text>
        </ScreenWrapper>
    );
}