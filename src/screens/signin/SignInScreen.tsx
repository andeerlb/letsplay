import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";

type SignInScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignIn'>;

export default function SignInScreen({ }: { navigation: SignInScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>SignIn Screen</Text>
        </ScreenWrapper>
    );
}