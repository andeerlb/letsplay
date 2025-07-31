import CalendarIcon from '@assets/icons/calendar.svg';
import LetsplayIcon from '@assets/icons/letsplay-round.svg';
import StatsIcon from '@assets/icons/stats.svg';
import TeamIcon from '@assets/icons/team.svg';
import Button from "@components/button/Button";
import { useTheme } from "@hooks/useTheme";
import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from '@tps/navigation';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: { navigation: WelcomeScreenNavigationProp }) {
    const { theme } = useTheme();

    const goToSignIn = () => {
        navigation.navigate('SignIn');
    }

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.rootContainer}>
            <Svg style={StyleSheet.absoluteFill}>
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="0.8" y2="1">
                        <Stop offset="0" stopColor="#193f22" />
                        <Stop offset="0.2" stopColor="#193f22" />
                        <Stop offset="0.4" stopColor="#0e2714ff" />
                        <Stop offset="0.6" stopColor="#141b22" />
                        <Stop offset="0.8" stopColor="#15351cff" />
                        <Stop offset="1" stopColor="#141b22" />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            </Svg>

            {/* Conteúdo da tela */}
            <ScrollView contentContainerStyle={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <View style={styles.containerTitle}>
                            <LetsplayIcon height={40} width={40} />
                            <Text style={[
                                styles.title,
                                { fontFamily: theme.fonts.logoBold.fontFamily }
                            ]}>
                                LetsPlay
                            </Text>
                        </View>
                        <Text style={[
                            styles.subTitle,
                            { fontFamily: theme.fonts.regular.fontFamily }
                        ]}>
                            <Trans>screen.welcome.description</Trans>
                        </Text>
                    </View>
                    <View style={styles.containerStats}>
                        <View style={styles.statsItem}>
                            <StatsIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}><Trans>screen.welcome.manage.title</Trans></Text>
                            <Text style={styles.statsItemDesc}><Trans>screen.welcome.manage.desc</Trans></Text>
                        </View>
                        <View style={styles.statsItem}>
                            <TeamIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}><Trans>screen.welcome.team.title</Trans></Text>
                            <Text style={styles.statsItemDesc}><Trans>screen.welcome.team.desc</Trans></Text>
                        </View>
                        <View style={styles.statsItem}>
                            <StatsIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}><Trans>screen.welcome.stats.title</Trans></Text>
                            <Text style={styles.statsItemDesc}><Trans>screen.welcome.stats.desc</Trans></Text>
                        </View>
                        <View style={styles.statsItem}>
                            <CalendarIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}><Trans>welcome.screen.schedule.title</Trans></Text>
                            <Text style={styles.statsItemDesc}>
                                <Trans>welcome.screen.schedule.desc</Trans>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerBtn}>
                        <Button label={t`welcome.screen.signup`} style={styles.buttonStart} onPress={goToSignUp} />
                        <Button label={t`welcome.screen.signin`} style={styles.buttonHasAccount} onPress={goToSignIn} />
                    </View>
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
        borderColor: '#1f4227ff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 30,
        gap: 40
    },
    containerHeader: {
        alignItems: 'center',
        gap: 10
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 30,
        color: '#ffffff'
    },
    subTitle: {
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 14,
        color: '#EAEDF0'
    },
    containerStats: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    statsItem: {
        width: '45%',
        alignItems: 'center',
        minWidth: 150,
        paddingVertical: 20,
        paddingHorizontal: 10,
        color: "#ffffff",
        backgroundColor: 'rgba(37, 107, 53, .4)',
        borderRadius: 8,
        textAlign: 'center',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#256b35',
        boxSizing: 'border-box',
        gap: 10
    },
    statsItemTitle: {
        color: "#ffffff",
        textAlign: "center",
    },
    statsItemDesc: {
        color: "#EAEDF0",
        textAlign: "center"
    },
    buttonStart: {
        borderRadius: 10,
        backgroundColor: '#256b35',
        borderWidth: .2,
        borderColor: "#fff"
    },
    buttonHasAccount: {
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,.3)',
        borderWidth: .2,
        borderColor: "#fff"
    },
    rootContainer: {
        flex: 1
    },
    containerBtn: {
        gap: 10
    }
});
