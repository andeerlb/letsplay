/* eslint-disable react-native/no-inline-styles */
import Button from "@components/button/Button";
import InputEmail from "@components/input/inputEmail";
import InputPassword from "@components/input/inputPassword";
import { useTheme } from "@hooks/useTheme";
import { Trans, useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@hooks/useToast";
import { useGetToken } from "@mutation/user";
import { AppDispatch } from "@store/index";
import { persistToken } from "@store/slices/tokenSlice";
import { UserCredentials } from "@tps/api";
import { RootStackParamList } from "@tps/navigation";
import ScreenScrollWrapper from "@wrapper/ScreenScrollWrapper";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default function SignInScreen({
    navigation,
}: {
    navigation: SignInScreenNavigationProp;
}) {
    const { theme } = useTheme();
    const { t } = useLingui();
    const passwordRef = useRef<TextInput>(null);
    const getToken = useGetToken();
    const dispatch = useDispatch<AppDispatch>();
    const toast = useToast();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const goToSignUp = () => {
        navigation.navigate('NoAuth', { screen: 'SignUp' });
    };

    const onSubmit = (data: UserCredentials) => {
        getToken.mutate(data, {
            onSuccess: dataParam => {
                dispatch(persistToken(dataParam));
            },
            onError: err => {
                console.log(err);
                toast.error(t`screen.signin.invalid-grant`);
            }
        })
    };

    return (
        <ScreenScrollWrapper>
            <View style={styles.centeredContainer}>
                <View style={styles.wrapper}>
                    <View style={{ gap: 5 }}>
                        <Text
                            style={[
                                styles.title,
                                {
                                    fontFamily: theme.fonts.logoBold.fontFamily,
                                    color: theme.colors.text,
                                },
                            ]}
                        >
                            <Trans>screen.signin.welcome</Trans>
                        </Text>
                        <Text
                            style={[
                                styles.description,
                                {
                                    fontFamily: theme.fonts.regular.fontFamily,
                                    color: theme.secondaryColors.text,
                                },
                            ]}
                        >
                            <Trans>screen.signin.description</Trans>
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.container,
                            {
                                backgroundColor: theme.secondaryColors.background,
                                borderColor: theme.colors.border,
                            },
                        ]}
                    >
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputEmail
                                    label={t`screen.signin.user`}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    error={errors.email?.message}
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
                                    returnKeyType="done"
                                    onSubmitEditing={handleSubmit(onSubmit)}
                                />
                            )}
                        />

                        <View style={{ gap: 10 }}>
                            <Text
                                style={{
                                    textAlign: "right",
                                    color: theme.colors.secondary,
                                    fontFamily: theme.fonts.regular.fontFamily,
                                }}
                            >
                                <Trans>screen.signin.forgot</Trans>
                            </Text>
                            <Button
                                label={t`screen.signin.btn-sigin`}
                                onPress={handleSubmit(onSubmit)}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text
                            style={[
                                styles.signup,
                                {
                                    fontFamily: theme.fonts.regular.fontFamily,
                                    color: theme.secondaryColors.text,
                                },
                            ]}
                        >
                            <Trans>screen.signin.noaccount</Trans>
                        </Text>
                        <Text
                            onPress={goToSignUp}
                            style={[
                                styles.signupUrl,
                                {
                                    fontFamily: theme.fonts.bold.fontFamily,
                                    color: theme.colors.secondary,
                                },
                            ]}
                        >
                            <Trans>screen.signin.signup</Trans>
                        </Text>
                    </View>
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
    },
    wrapper: {
        gap: 40,
        paddingVertical: 30,
        width: "90%",
        alignItems: "center",
    },
    container: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 30,
        gap: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 30,
    },
    description: {
        textAlign: "center",
        fontSize: 15,
    },
    signup: {
        fontSize: 15,
    },
    signupUrl: {
        fontSize: 15,
    },
});
