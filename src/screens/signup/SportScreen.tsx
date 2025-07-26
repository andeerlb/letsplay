import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
} from 'react-native';
import { useTheme } from '@context/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLingui } from '@lingui/react/macro';
import { msg, t } from '@lingui/core/macro';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageDescriptor } from '@lingui/core';
import { Animation } from '@components/animation/Animation';
import Animations from '@constants/animations';
import { FUT7_POSITIONS, Fut7PositionCard } from '@components/positionCard/Fut7PositionCard';
import Select from '@components/select/Select';
import ScreenScrollWrapper from '@wrapper/ScreenScrollWrapper';

const schema = yup.object({
    position: yup.string().required(),
    gameTypes: yup.string().required()
});

const getPlayerExperience = (age: number): MessageDescriptor => {
    if (age <= 25) return msg`screen.signup.sport.description.beginner`;
    if (age <= 29) return msg`screen.signup.sport.description.intermediate`;
    if (age <= 35) return msg`screen.signup.sport.description.intermediate-advanced`;
    return msg`screen.signup.sport.description.veteran`;
}

type SportScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Sport'>;

export type SportScreenRef = {
    submitForm: () => void;
};

const GAME_TYPES = [
    {
        label: msg`screen.signup.sport.game-type.fut11`,
        value: 'fut11'
    },
    {
        label: msg`screen.signup.sport.game-type.fut7`,
        value: 'fut7'
    },
    {
        label: msg`screen.signup.sport.game-type.futsal`,
        value: 'futsal'
    }
];

const SportScreen = forwardRef<SportScreenRef, { navigation: SportScreenNavigationProp }>(
    ({ navigation }, ref) => {
        const { theme } = useTheme();
        const { i18n } = useLingui();
        const safeAreaInsets = useSafeAreaInsets();
        const description = i18n._(getPlayerExperience(30));

        const {
            control,
            handleSubmit,
            formState: { errors },
            watch,
            setValue
        } = useForm({ resolver: yupResolver(schema) });

        const selectedPosition = watch('position');
        const selectedGameType = watch('gameTypes');

        const [positions, setPositions] = useState<{ label: string; value: string }[]>([]);
        const [gameTypes, setGameTypes] = useState([]);

        const cardOpacity = useRef(new Animated.Value(0)).current;
        const cardTranslateY = useRef(new Animated.Value(20)).current;
        const shakeAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            setGameTypes(GAME_TYPES.map((item) => ({
                label: i18n._(item.label),
                value: item.value
            })));

            const options = Object.entries(FUT7_POSITIONS).map(([key, value]) => ({
                label: i18n._(value.title),
                value: key,
            }));
            setPositions(options);
        }, [i18n]);

        useEffect(() => {
            if (selectedPosition) {
                // Resetar valores antes de animar de novo
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
        }, [selectedPosition]);

        useEffect(() => {
            setValue('position', '');
            if (selectedGameType) {
                // animação de tremor (shake)
                Animated.sequence([
                    Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
                    Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
                    Animated.timing(shakeAnim, { toValue: -8, duration: 50, useNativeDriver: true }),
                    Animated.timing(shakeAnim, { toValue: 8, duration: 50, useNativeDriver: true }),
                    Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
                ]).start();
            }
        }, [selectedGameType]);

        useImperativeHandle(ref, () => ({
            submitForm: () => {
                handleSubmit((data) => {
                    navigation.navigate('Credentials');
                })();
            },
        }));

        return (
            <ScreenScrollWrapper>
                <Animation source={Animations.SPORT_SPLASH} />
                <View
                    style={[styles.container, { paddingBottom: safeAreaInsets.bottom }]}
                >
                    <View style={styles.header}>
                        <Text
                            style={[
                                styles.description,
                                {
                                    color: theme.colors.text,
                                    fontFamily: theme.fonts.regular.fontFamily,
                                },
                            ]}
                        >
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

                        {selectedPosition && selectedGameType && (
                            <Animated.View
                                style={{
                                    opacity: cardOpacity,
                                    transform: [{ translateY: cardTranslateY }],
                                }}
                            >
                                <Fut7PositionCard position={selectedPosition} />
                            </Animated.View>
                        )}
                    </View>
                </View>
            </ScreenScrollWrapper>
        );
    }
);

const styles = StyleSheet.create({
    header: {},
    container: {
        gap: 40
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    description: {
        textAlign: 'center',
    },
    content: {
        gap: 30
    }
});

export default SportScreen;
