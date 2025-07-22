import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";

type ProfileScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Profile'>;

export default function ProfileScreen({ }: { navigation: ProfileScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>ProfileScreen Screen</Text>
        </ScreenWrapper>
    );
}