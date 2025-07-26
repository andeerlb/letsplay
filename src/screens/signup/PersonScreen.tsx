import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '@context/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '@components/input/Input';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';
import Birthdate from '@components/birthdate/Birthdate';
import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenScrollWrapper from '@wrapper/ScreenScrollWrapper';

const schema = yup.object({
    givenName: yup.string().required(),
    surname: yup.string().required(),
    birthdate: yup
        .string()
        .required()
        .test('is-valid-date', '', (value) => {
            if (!value) return false;

            const [day, month, year] = value.split('/');
            if (!day || !month || !year) return false;

            const birthYear = Number(year);
            const birthMonth = Number(month) - 1;
            const birthDay = Number(day);
            const birthDate = new Date(birthYear, birthMonth, birthDay);
            const now = new Date();

            const yearMin = now.getFullYear() - 120;

            return (
                !isNaN(birthDate.getTime()) &&
                birthDate.getDate() === birthDay &&
                birthDate.getMonth() === birthMonth &&
                birthDate.getFullYear() === birthYear &&
                birthDate <= now &&
                birthYear >= yearMin
            );
        }),
});

type PersonScreenNavigationProp = NativeStackNavigationProp<SignUpStackParamList, 'Person'>;

export type PersonScreenRef = {
    submitForm: () => void;
};

const PersonScreen = forwardRef<PersonScreenRef, { navigation: PersonScreenNavigationProp }>(
    ({ navigation }, ref) => {
        const { theme } = useTheme();
        const safeAreaInsets = useSafeAreaInsets();

        const surnameRef = useRef<TextInput>(null);
        const birthdateRef = useRef<TextInput>(null);

        const {
            control,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(schema),
        });

        useImperativeHandle(ref, () => ({
            submitForm: () => {
                handleSubmit(() => {
                    navigation.navigate('Sport');
                })();
            },
        }));

        return (
            <ScreenScrollWrapper>
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        paddingTop: 10,
                        paddingBottom: safeAreaInsets.bottom,
                        gap: 30,
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
                            <Trans>screen.signup.person.title</Trans>
                        </Text>
                        <Text
                            style={[
                                styles.description,
                                { color: theme.secondaryColors.text, fontFamily: theme.fonts.regular.fontFamily },
                            ]}
                        >
                            <Trans>screens.signup.person.description</Trans>
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
                        <Controller
                            name="birthdate"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <Birthdate
                                    ref={birthdateRef}
                                    label={t`screen.signup.birthday`}
                                    value={value}
                                    onChangeText={onChange}
                                    error={error?.message}
                                    returnKeyType="done"
                                    onSubmitEditing={() => handleSubmit(() => navigation.navigate('Sport'))()}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScreenScrollWrapper>
        );
    }
);

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

export default PersonScreen;
