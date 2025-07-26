import { Animation } from '@components/animation/Animation';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { FUT11_POSITIONS, Fut11PositionCard } from '@components/positionCard/Fut11PositionCard';
import { FUT7_POSITIONS, Fut7PositionCard } from '@components/positionCard/Fut7PositionCard';
import { FUTSAL_POSITIONS, FutsalPositionCard } from '@components/positionCard/FutsalPositionCard';
import Select from '@components/select/Select';
import Animations from '@constants/animations';
import { useTheme } from '@context/ThemeProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenScrollWrapper from '@wrapper/ScreenScrollWrapper';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Animated,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as yup from 'yup';

const getPlayerExperience = (age: number): MessageDescriptor => {
    if (age <= 25) return msg`screen.signup.sport.description.beginner`;
    if (age <= 29) return msg`screen.signup.sport.description.intermediate`;
    if (age <= 35) return msg`screen.signup.sport.description.intermediate-advanced`;
    return msg`screen.signup.sport.description.veteran`;
};

export type SportScreenRef = {
    submitForm: () => void;
};

type SportScreenProps = {
    navigation: NativeStackNavigationProp<SignUpStackParamList, 'Sport'>;
};

type PositionOption = { label: string; value: string };

const GAME_TYPE_VALUES = ['fut11', 'fut7', 'futsal'] as const;
type GameType = typeof GAME_TYPE_VALUES[number];

type Fut11PositionKey = keyof typeof FUT11_POSITIONS;
type Fut7PositionKey = keyof typeof FUT7_POSITIONS;
type FutsalPositionKey = keyof typeof FUTSAL_POSITIONS;

type PositionKeyByGameType<T extends GameType> =
    T extends 'fut11' ? Fut11PositionKey :
    T extends 'fut7' ? Fut7PositionKey :
    T extends 'futsal' ? FutsalPositionKey :
    never;

type FormValues<T extends GameType = GameType> = {
    gameTypes: T;
    position: PositionKeyByGameType<T> | null;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
    position: yup.string().required(),
    gameTypes: yup
        .mixed<GameType>()
        .oneOf(GAME_TYPE_VALUES)
        .required(),
});

const POSITION_MAP: Record<GameType, {
    positions: Record<string, { title: MessageDescriptor }>;
    card: React.FC<{ position: string }>;
}> = {
    fut11: {
        positions: FUT11_POSITIONS,
        card: Fut11PositionCard,
    },
    fut7: {
        positions: FUT7_POSITIONS,
        card: Fut7PositionCard,
    },
    futsal: {
        positions: FUTSAL_POSITIONS,
        card: FutsalPositionCard,
    },
};

const GAME_TYPES: { label: MessageDescriptor; value: GameType }[] = [
    { label: msg`screen.signup.sport.game-type.fut11`, value: 'fut11' },
    { label: msg`screen.signup.sport.game-type.fut7`, value: 'fut7' },
    { label: msg`screen.signup.sport.game-type.futsal`, value: 'futsal' }
];

const SportScreen = forwardRef<SportScreenRef, SportScreenProps>(({ navigation }, ref) => {
    const { theme } = useTheme();
    const { i18n, t } = useLingui();
    const safeAreaInsets = useSafeAreaInsets();
    const description = i18n._(getPlayerExperience(30));

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const selectedPosition = watch('position') as PositionKeyByGameType<GameType>;
    const selectedGameType = watch('gameTypes') as GameType;

    const [positions, setPositions] = useState<PositionOption[]>([]);
    const [gameTypes, setGameTypes] = useState<PositionOption[]>([]);
    const [PositionCard, setPositionCard] = useState<React.FC<{ position: string }> | null>(null);

    const cardOpacity = useRef(new Animated.Value(0)).current;
    const cardTranslateY = useRef(new Animated.Value(20)).current;
    const shakeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setGameTypes(GAME_TYPES.map(item => ({
            label: i18n._(item.label),
            value: item.value
        })));
    }, [i18n]);

    useEffect(() => {

        if (selectedGameType) {
            Animated.sequence([
                Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnim, { toValue: -8, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnim, { toValue: 8, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
            ]).start();

            const mappedPositions = Object.entries(POSITION_MAP[selectedGameType].positions).map(([key, val]) => ({
                label: i18n._(val.title),
                value: key
            }));

            setValue('position', null);
            setPositions(mappedPositions);
            setPositionCard(() => POSITION_MAP[selectedGameType].card);
        } else {
            setPositions([]);
            setPositionCard(null);
        }
    }, [selectedGameType, setValue, i18n, shakeAnim]);

    useEffect(() => {
        if (selectedPosition) {
            cardOpacity.setValue(0);
            cardTranslateY.setValue(20);

            Animated.parallel([
                Animated.timing(cardOpacity, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(cardTranslateY, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [cardOpacity, cardTranslateY, selectedPosition]);

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            handleSubmit(() => {
                navigation.navigate('Credentials');
            })();
        },
    }));

    return (
        <ScreenScrollWrapper>
            <Animation source={Animations.SPORT_SPLASH} />
            <View style={[styles.container, { paddingBottom: safeAreaInsets.bottom }]}>
                <View style={styles.header}>
                    <Text style={[styles.description, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>
                        {description}
                    </Text>
                </View>

                <View style={styles.content}>
                    <Controller
                        control={control}
                        name="gameTypes"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                label={t`screen.signup.sport.game-types`}
                                options={gameTypes}
                                value={value}
                                error={errors.gameTypes?.message}
                                onChange={onChange}
                            />
                        )}
                    />

                    {selectedGameType && (
                        <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
                            <Controller
                                control={control}
                                name="position"
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        label={t`screen.signup.sport.select-your-position`}
                                        options={positions}
                                        value={value}
                                        error={errors.position?.message}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </Animated.View>
                    )}

                    {selectedPosition && selectedGameType && PositionCard && (
                        <Animated.View style={{ opacity: cardOpacity, transform: [{ translateY: cardTranslateY }] }}>
                            <PositionCard position={selectedPosition as any} />
                        </Animated.View>
                    )}
                </View>
            </View>
        </ScreenScrollWrapper>
    );
});

const styles = StyleSheet.create({
    header: {},
    container: {
        gap: 40,
    },
    description: {
        textAlign: 'center',
    },
    content: {
        gap: 30,
    },
});

export default SportScreen;
