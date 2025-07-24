import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";

type SignUpScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignUp'>;

export default function SignUpScreen({ }: { navigation: SignUpScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>SignUpScreen Screen</Text>
        </ScreenWrapper>
    );
}