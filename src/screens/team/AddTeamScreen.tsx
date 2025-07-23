import { TeamStackParamList } from "@components/navigation/teamNavigator";
import { useHideTabBar } from "@hooks/hideTabBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { Text } from "react-native";

type AddScreenNavigationProps = NativeStackNavigationProp<TeamStackParamList, 'Add'>;

type Props = {
    navigation: AddScreenNavigationProps;
};

export default function AddTeamScreen({ }: Props) {
    return (
        <ScreenWrapper>
            <Text>add team screen</Text>
        </ScreenWrapper>
    )
}