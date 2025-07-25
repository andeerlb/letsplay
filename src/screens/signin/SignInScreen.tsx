import React, { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";
import { useTheme } from "@context/ThemeProvider";
import { Trans, useLingui } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import InputEmail from "@components/input/inputEmail";
import InputPassword from "@components/input/inputPassword";
import Button from "@components/button/Button";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignIn'>;

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default function SignInScreen({ navigation }: { navigation: SignInScreenNavigationProp }) {
    const { theme } = useTheme();
    const { t } = useLingui();
    const passwordRef = useRef<TextInput>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onSubmit = (data: { email: string; password: string }) => {
        console.log("Dados enviados:", data);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.wrapper}>
                <View style={{ gap: 5 }}>
                    <Text style={[styles.title, { fontFamily: theme.fonts.logoBold.fontFamily, color: theme.colors.text }]}>
                        <Trans>screen.signin.welcome</Trans>
                    </Text>
                    <Text style={[styles.description, { fontFamily: theme.fonts.regular.fontFamily, color: theme.secondaryColors.text }]}>
                        <Trans>screen.signin.description</Trans>
                    </Text>
                </View>

                <View style={[styles.container, { backgroundColor: theme.secondaryColors.background, borderColor: theme.colors.border }]}>
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
                        <Text style={{ textAlign: 'right', color: theme.colors.secondary, fontFamily: theme.fonts.regular.fontFamily }}>
                            <Trans>screen.signin.forgot</Trans>
                        </Text>
                        <Button label={t`screen.signin.btn-sigin`} onPress={handleSubmit(onSubmit)} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={[styles.signup, { fontFamily: theme.fonts.regular.fontFamily, color: theme.secondaryColors.text }]}>
                        <Trans>screen.signin.noaccount</Trans>
                    </Text>
                    <Text onPress={goToSignUp} style={[styles.signupUrl, { fontFamily: theme.fonts.bold.fontFamily, color: theme.colors.secondary }]}>
                        <Trans>screen.signin.signup</Trans>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        gap: 40
    },
    container: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 30,
        gap: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    description: {
        textAlign: 'center',
        fontSize: 15
    },
    signup: {
        fontSize: 15
    },
    signupUrl: {
        fontSize: 15
    }
});
