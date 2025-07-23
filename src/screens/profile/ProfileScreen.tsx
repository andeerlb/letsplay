import { StyleSheet, View } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import Input from "@components/input/Input";
import { useLingui } from "@lingui/react/macro";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

type ProfileScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Profile'>;

export default function ProfileScreen({ }: { navigation: ProfileScreenNavigationProp }) {
    const user = useSelector((state: RootState) => state.user);
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <View style={[styles.container]}>
                <Input label={t`screen.profile.given-name`} value={user.givenName} />
                <Input label={t`screen.profile.surname`} value={user.surname} />
                <Input label={t`screen.profile.nickname`} value={user.nickname} />
                <Input label={t`screen.profile.email`} value={user.email} />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
})