import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TeamStackParamList } from "@tps/navigation";
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