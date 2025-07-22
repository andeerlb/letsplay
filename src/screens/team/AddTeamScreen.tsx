import { TeamStackParamList } from "@components/navigation/teamNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { Text } from "react-native";

type AddScreenNavigationProps = BottomTabNavigationProp<TeamStackParamList, 'Main'>;

export default function AddTeamScreen({ }: AddScreenNavigationProps) {
    return (
        <ScreenWrapper>
            <Text>add team screen</Text>
        </ScreenWrapper>
    )
}