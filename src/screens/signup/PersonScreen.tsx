import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "@components/navigation/signUpNavigator";
import { Trans } from "@lingui/react/macro";
import { useTheme } from "@context/ThemeProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input from "@components/input/Input";
import { t } from "@lingui/core/macro";

type PersonScreenScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Person'>;

export default function PersonScreen({ }: { navigation: PersonScreenScreenNavigationProp }) {
    const { theme } = useTheme();
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <ScreenWrapper>
            <View style={{
                paddingTop: safeAreaInsets.top,
                paddingBottom: safeAreaInsets.bottom,
                gap: 60
            }}>
                <View style={styles.header}>
                    <Text style={[styles.title, {
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily
                    }]}>
                        <Trans>screen.signup.person.title</Trans>
                    </Text>
                    <Text style={[styles.description, {
                        color: theme.secondaryColors.text,
                        fontFamily: theme.fonts.regular.fontFamily
                    }]}>
                        <Trans>screens.signup.person.description</Trans>
                    </Text>
                </View>
                <View style={styles.content}>
                    <Input label={t`screen.signup.given-name`} />
                    <Input label={t`screen.signup.surname`} />
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: 10,
        paddingTop: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    description: {
        textAlign: 'center',
    },
    content: {
        gap: 20
    }
})