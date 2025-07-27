/* eslint-disable react-native/no-inline-styles */
import Button from "@components/button/Button";
import { SignUpStackParamList } from "@components/navigation/signUpNavigator";
import { useTheme } from "@context/ThemeProvider";
import { Trans, useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import InputEmail from "@components/input/inputEmail";
import InputPassword from "@components/input/inputPassword";
import { useSignUp } from "@context/SignUpProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import ScreenScrollWrapper from "@wrapper/ScreenScrollWrapper";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type CredentialsScreenProps = {
    navigation: NativeStackNavigationProp<SignUpStackParamList, "Credentials">;
};

const schema = yup.object({
    username: yup.string().required(),
    password: yup
        .string()
        .required()
        .min(6),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")])
        .required(),
});

type CredentialsFormData = {
    username: string;
    password: string;
    confirmPassword: string;
};

export default function CredentialsScreen({ navigation }: CredentialsScreenProps) {
    const { person } = useSignUp();
    const { theme } = useTheme();
    const { t } = useLingui();
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CredentialsFormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: CredentialsFormData) => {
        console.log("Dados validados:", data);
    };

    return (
        <ScreenScrollWrapper>
            <View style={styles.centeredContainer}>
                <View style={{ gap: 10 }}>
                    <Text style={[styles.title, { fontFamily: theme.fonts.logoBold.fontFamily, color: theme.colors.secondary }]}>
                        <Trans>screen.signup.credentials.title</Trans>
                    </Text>
                    <Text style={[styles.description, { fontFamily: theme.fonts.regular.fontFamily, color: theme.secondaryColors.text }]}>
                        <Trans>screen.signup.credentials.description</Trans>{' '}
                        <Text style={[styles.playerName, {
                            fontFamily: theme.fonts.bold.fontFamily
                        }]}>{person?.givenName}</Text>.
                    </Text>
                </View>
                <View style={[styles.wrapper, { backgroundColor: theme.secondaryColors.background, borderColor: theme.colors.border }]}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputEmail
                                label={t`screen.signin.user`}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.username?.message}
                                autoCapitalize="none"
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputPassword
                                label={t`screen.signin.password`}
                                value={value}
                                ref={passwordRef}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.password?.message}
                                secureTextEntry
                                returnKeyType="next"
                                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputPassword
                                label={t`screen.signup.credentials.confirm-password`}
                                value={value}
                                ref={confirmPasswordRef}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.confirmPassword?.message}
                                secureTextEntry
                                returnKeyType="done"
                                onSubmitEditing={handleSubmit(onSubmit)}
                            />
                        )}
                    />

                    <Button
                        label={t`screen.signup.credentials.register`}
                        onPress={handleSubmit(onSubmit)}
                        style={{ marginTop: 20 }}
                    />
                </View>
            </View>
        </ScreenScrollWrapper>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    wrapper: {
        width: "100%",
        borderRadius: 12,
        borderWidth: 1,
        padding: 24,
        gap: 15,
    },
    title: {
        fontSize: 28,
        textAlign: "center",
    },
    description: {
        fontSize: 15,
        textAlign: "center",
    },
    playerName: {
        textTransform: 'capitalize'
    }
});
