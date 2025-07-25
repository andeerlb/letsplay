import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ScreenWrapper from '@wrapper/ScreenWrapper';
import { useTheme } from '@context/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLingui } from '@lingui/react/macro';
import { msg, t } from '@lingui/core/macro';
import Button from '@components/button/Button';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageDescriptor } from '@lingui/core';
import { Animation } from '@components/animation/Animation';
import Animations from '@constants/animations';
import { Fut7PositionCard } from '@components/positionCard/Fut7PositionCard';

const schema = yup.object({
    givenName: yup.string().required('Nome é obrigatório'),
    surname: yup.string().required('Sobrenome é obrigatório'),
    birthdate: yup.string().required('Data de nascimento é obrigatória'),
});

const getPlayerExperience = (age: number): MessageDescriptor => {
    if (age <= 25) return msg`screen.signup.sport.description.beginner`;
    if (age <= 29) return msg`screen.signup.sport.description.intermediate`;
    if (age <= 35) return msg`screen.signup.sport.description.intermediate-advanced`;
    return msg`screen.signup.sport.description.veteran`;
}

type SportScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Sport'>;

export default function SportScreen({ navigation }: { navigation: SportScreenNavigationProp }) {
    const { theme } = useTheme();
    const { i18n } = useLingui();
    const safeAreaInsets = useSafeAreaInsets();
    const description = i18n._(getPlayerExperience(30));

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data: any) => {
        navigation.navigate('Sport');
    };

    return (
        <ScreenWrapper>
            <Animation source={Animations.SPORT_SPLASH} />
            <View
                style={{
                    paddingBottom: safeAreaInsets.bottom,
                    gap: 60,
                    paddingHorizontal: 16,
                }}
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

                <View style={styles.carouselWrapper}>
                    <Fut7PositionCard position='goalkeeper' />
                </View>

                <Button label={t`screen.signup.next`} onPress={handleSubmit(onSubmit)} />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    description: {
        textAlign: 'center',
    },
    carouselWrapper: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowLeft: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        padding: 10,
    },
    arrowRight: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
        padding: 10,
    },
    arrowText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#114926ff',
    },
});
