import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";
import LetsplayIcon from '@assets/icons/letsplay-round.svg';
import { useTheme } from "@context/ThemeProvider";
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import StatsIcon from '@assets/icons/stats.svg';
import TeamIcon from '@assets/icons/team.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import TrophyIcon from '@assets/icons/trophy.svg';
import Button from "@components/button/Button";
import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";

type SignInScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: { navigation: SignInScreenNavigationProp }) {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                <View style={[styles.container,
                {
                    backgroundColor: theme.secondaryColors.background,
                    borderColor: theme.colors.border
                }
                ]}>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    container: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 30,
        gap: 40
    },
});
