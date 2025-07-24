import { ScrollView, StyleSheet, Text, View } from "react-native";
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

type WelcomeScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignIn'>;

export default function WelcomeScreen({ }: { navigation: WelcomeScreenNavigationProp }) {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <Svg style={StyleSheet.absoluteFill}>
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="0.8" y2="1">
                        <Stop offset="0" stopColor="#141b22" />
                        <Stop offset="0.2" stopColor="#15351cff" />
                        <Stop offset="0.4" stopColor="#0e2714ff" />
                        <Stop offset="0.6" stopColor="#193f22" />
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
                            Gerencie seu time, acompanhe partidas e conquiste vitórias.
                        </Text>
                    </View>
                    <View style={styles.containerStats}>
                        <View style={styles.statsItem}>
                            <TeamIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}>Gerir Equipe</Text>
                            <Text style={styles.statsItemDesc}>Organize jogadores e posições</Text>
                        </View>
                        <View style={styles.statsItem}>
                            <StatsIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}>Resultados</Text>
                            <Text style={styles.statsItemDesc}>Marque treinos e jogos</Text>
                        </View>
                        <View style={styles.statsItem}>
                            <StatsIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}>Estatísticas</Text>
                            <Text style={styles.statsItemDesc}>Acompanhe estatísticas</Text>
                        </View>
                        <View style={styles.statsItem}>
                            <CalendarIcon height={30} width={30} color='#ffffff' />
                            <Text style={[styles.statsItemTitle,
                            { fontFamily: theme.fonts.bold.fontFamily }
                            ]}>Agendar</Text>
                            <Text style={styles.statsItemDesc}>
                                Marque treinos e jogos
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Button label='Começar agora' style={styles.buttonStart} />
                        <Button label='Já tenho uma conta' style={styles.buttonHasAccount} />
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
        flexWrap: 'wrap',
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
    }
});
