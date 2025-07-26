import Button from '@components/button/Button';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { SignUpMoreSportsContextType, useSignUp } from '@context/SignUpProvider';
import { useTheme } from '@context/ThemeProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenWrapper from '@wrapper/ScreenWrapper';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as yup from 'yup';

export type MoreSportsScreenRef = {
    submitForm: () => void;
};

type MoreSportsScreenProps = {
    navigation: NativeStackNavigationProp<SignUpStackParamList, 'MoreSports'>;
};

const schema = yup.object({});

const allGames = [
    {
        id: 'fut11',
        label: 'FUT 11 ⚽',
        positions: ['Goleiro', 'Zagueiro', 'Lateral', 'Meio-campo', 'Atacante'],
    },
    {
        id: 'fut7',
        label: 'FUT 7 🥅',
        positions: ['Goleiro', 'Fixo', 'Ala', 'Atacante'],
    },
    {
        id: 'futsal',
        label: 'Futsal 🏃‍♂️',
        positions: ['Goleiro', 'Fixo', 'Ala', 'Pivô'],
    },
] as const;

type GameId = (typeof allGames)[number]['id'];

const MoreSportsScreen = forwardRef<MoreSportsScreenRef, MoreSportsScreenProps>(
    ({ navigation }, ref) => {
        const { setMoreSports } = useSignUp();
        const { theme } = useTheme();
        const { handleSubmit } = useForm({ resolver: yupResolver(schema) });

        const [step, setStep] = useState<'game' | 'position' | 'another'>('game');
        const [remainingGames, setRemainingGames] = useState([...allGames]);
        const [selectedGame, setSelectedGame] = useState<(typeof allGames)[number] | null>(null);
        const [selectedGamesWithPositions, setSelectedGamesWithPositions] = useState<SignUpMoreSportsContextType>([]);

        useImperativeHandle(ref, () => ({
            submitForm: () => {
                handleSubmit(() => {
                    setMoreSports(selectedGamesWithPositions);
                    navigation.navigate('Credentials');
                })();
            },
        }));

        const handleSelectGame = (game: (typeof allGames)[number]) => {
            setSelectedGame(game);
            setStep('position');
        };

        const handleSelectPosition = (position: string) => {
            if (!selectedGame) return;

            setSelectedGamesWithPositions(prev => [
                ...prev,
                { game: selectedGame.id as GameId, position },
            ]);

            setRemainingGames(prev => prev.filter(g => g.id !== selectedGame.id));
            setSelectedGame(null);
            setStep('another');
        };

        const handleDeleteSelected = (indexToRemove: number) => {
            setSelectedGamesWithPositions(prev => {
                const removedItem = prev[indexToRemove];
                if (!removedItem) return prev;

                const removedGame = allGames.find(g => g.id === removedItem.game);
                if (removedGame) {
                    setRemainingGames(rg => [...rg, removedGame].sort((a, b) => a.label.localeCompare(b.label)));
                }

                const updated = prev.filter((_, index) => index !== indexToRemove);
                if (updated.length === 0) {
                    setStep('game');
                }

                return updated;
            });
        };

        return (
            <ScreenWrapper>
                <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                    <View style={styles.header}>
                        <Text style={[styles.descriptionPart1, { color: theme.colors.text, fontFamily: theme.fonts.logoBold.fontFamily }]}>
                            Top demais, <Text style={[styles.playerName, { color: theme.colors.secondary }]}>Anderson</Text>!
                        </Text>

                        {step === 'game' && (
                            <Text style={[styles.descriptionPart2, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>
                                <Text style={{ fontFamily: theme.fonts.bold.fontFamily }}>
                                    Agora conta aí:
                                </Text>{' '}
                                encara outro jogo também ou é só FUT 11 na veia?
                            </Text>
                        )}

                        {step === 'position' && selectedGame && (
                            <Text style={[styles.descriptionPart2, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>
                                Show! E no{' '}
                                <Text style={{ fontFamily: theme.fonts.bold.fontFamily }}>
                                    {selectedGame.label}
                                </Text>
                                , você joga em qual posição?
                            </Text>
                        )}

                        {step === 'another' && (
                            <Text style={[styles.descriptionPart2, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>
                                {remainingGames.length ? 'Quer escolher mais um jogo ou bora pro próximo passo?' : 'Você tá voando, craque! Todos os jogos já selecionados! 🚀⚽'}
                            </Text>
                        )}
                    </View>

                    {step === 'another' && selectedGamesWithPositions.length > 0 && (
                        <View style={styles.selectedSummary}>
                            {selectedGamesWithPositions.map((item, index) => {
                                const gameLabel = allGames.find(g => g.id === item.game)?.label ?? item.game;
                                return (
                                    <View key={`${item.game}-${index}`} style={[styles.summaryItem, { backgroundColor: theme.secondaryColors.background }]}>
                                        <Text style={[styles.summaryText, { color: theme.secondaryColors.text, fontFamily: theme.fonts.medium.fontFamily }]}>
                                            {gameLabel} → {item.position}
                                        </Text>
                                        <TouchableOpacity onPress={() => handleDeleteSelected(index)}>
                                            <Text style={[styles.deleteBtn, { color: theme.secondaryColors.text }]}>✕</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    )}

                    {step === 'game' && (
                        <FlatList
                            data={remainingGames}
                            keyExtractor={item => item.id}
                            contentContainerStyle={styles.optionsContainer}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.optionCard,
                                        {
                                            backgroundColor: theme.secondaryColors.background,
                                            borderColor: theme.colors.border,
                                        },
                                    ]}
                                    onPress={() => handleSelectGame(item)}
                                    activeOpacity={0.8}
                                >
                                    <Text style={[styles.optionText, { color: theme.colors.text, fontFamily: theme.fonts.medium.fontFamily }]}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                    {step === 'position' && selectedGame && (
                        <FlatList
                            data={selectedGame.positions}
                            keyExtractor={(item, index) => `${selectedGame.id}-${index}`}
                            contentContainerStyle={styles.optionsContainer}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.optionCard,
                                        {
                                            backgroundColor: theme.secondaryColors.background,
                                            borderColor: theme.colors.border,
                                        },
                                    ]}
                                    onPress={() => handleSelectPosition(item)}
                                    activeOpacity={0.8}
                                >
                                    <Text style={[styles.optionText, { color: theme.colors.text, fontFamily: theme.fonts.medium.fontFamily }]}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                    {step === 'another' && remainingGames.length > 0 && (
                        <Button label='Bora escolher outro!' onPress={() => setStep('game')} />
                    )}
                </View>
            </ScreenWrapper>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        gap: 50,
    },
    header: {
        gap: 20,
    },
    descriptionPart1: {
        textAlign: 'center',
        fontSize: 22,
    },
    playerName: {
        fontWeight: 'bold',
    },
    descriptionPart2: {
        fontSize: 16,
        textAlign: 'center',
    },
    optionsContainer: {
        gap: 16,
        paddingBottom: 40,
    },
    optionCard: {
        padding: 16,
        borderRadius: 12,
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
    },
    selectedSummary: {
        gap: 8,
    },
    summaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
    },
    summaryText: {
        fontSize: 14,
    },
    deleteBtn: {
        fontSize: 18,
        paddingHorizontal: 8,
    },
});

export default MoreSportsScreen;
