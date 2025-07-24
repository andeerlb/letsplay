import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";

type RegisterScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'Register'>;

export default function RegisterInScreen({ }: { navigation: RegisterScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>Register Screen</Text>
        </ScreenWrapper>
    );
}