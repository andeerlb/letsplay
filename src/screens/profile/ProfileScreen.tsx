import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import Input from "@components/input/Input";
import { useLingui } from "@lingui/react/macro";

type ProfileScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Profile'>;

export default function ProfileScreen({ }: { navigation: ProfileScreenNavigationProp }) {
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <View style={[styles.container]}>
                <Input label={t`screen.profile.given-name`} />
                <Input label={t`screen.profile.surname`} />
                <Input label={t`screen.profile.nickname`} />
                <Input label={t`screen.profile.email`} />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
})