import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'; // ← TextInput importa aqui
import ScreenWrapper from '@wrapper/ScreenWrapper';
import { useTheme } from '@context/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '@components/input/Input';
import { Trans, useLingui } from '@lingui/react/macro';
import { msg, t } from '@lingui/core/macro';
import Birthdate from '@components/birthdate/Birthdate';
import Button from '@components/button/Button';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageDescriptor } from '@lingui/core';

const schema = yup.object({
    givenName: yup.string().required('Nome é obrigatório'),
    surname: yup.string().required('Sobrenome é obrigatório'),
    birthdate: yup.string().required('Data de nascimento é obrigatória'),
});

const getPlayerExperience = (age: number): MessageDescriptor => {
    if (age <= 25) {
        return msg`screen.signup.sport.description.beginner`;
    } else if (age >= 26 && age <= 29) {
        return msg`screen.signup.sport.description.intermediate`;
    } else if (age >= 30 && age <= 35) {
        return msg`screen.signup.sport.description.intermediate-advanced`;
    } else {
        return msg`screen.signup.sport.description.veteran`;
    }
}

type SportScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Sport'>;

export default function SportScreen({ navigation }: { navigation: SportScreenNavigationProp }) {
    const { theme } = useTheme();
    const { i18n } = useLingui();
    const safeAreaInsets = useSafeAreaInsets();
    const description = i18n._(getPlayerExperience(25));

    const surnameRef = useRef<TextInput>(null);
    const birthdateRef = useRef<TextInput>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        navigation.navigate('Sport');
    };

    return (
        <ScreenWrapper>
            <View
                style={{
                    paddingTop: 10,
                    paddingBottom: safeAreaInsets.bottom,
                    gap: 60,
                    paddingHorizontal: 16,
                }}
            >
                <View style={styles.header}>
                    <Text
                        style={[
                            styles.title,
                            { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily },
                        ]}
                    >
                        <Trans>screen.signup.sport.title</Trans>
                    </Text>
                    <Text
                        style={[
                            styles.description,
                            { color: theme.secondaryColors.text, fontFamily: theme.fonts.regular.fontFamily },
                        ]}
                    >
                        {description}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Controller
                        name="givenName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label={String(t`screen.signup.given-name`)}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.givenName?.message}
                                returnKeyType="next"
                                onSubmitEditing={() => surnameRef.current?.focus()}
                            />
                        )}
                    />
                    <Controller
                        name="surname"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                ref={surnameRef}
                                label={String(t`screen.signup.surname`)}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.surname?.message}
                                returnKeyType="next"
                                onSubmitEditing={() => birthdateRef.current?.focus?.()}
                            />

                        )}
                    />
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
    content: {
        gap: 20,
    },
});
