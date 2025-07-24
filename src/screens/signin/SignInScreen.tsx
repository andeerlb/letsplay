import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoAuthStackParamList } from "@components/navigation/noAuthNavigator";
import { useTheme } from "@context/ThemeProvider";
import Input from "@components/input/Input";
import Button from "@components/button/Button";
import { Trans, useLingui } from "@lingui/react/macro";

type SignInScreenNavigationProp = NativeStackNavigationProp<NoAuthStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: { navigation: SignInScreenNavigationProp }) {
    const { theme } = useTheme();
    const { t } = useLingui();

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.wrapper}>
                <View style={{ gap: 5 }}>
                    <Text style={[styles.title, {
                        fontFamily: theme.fonts.logoBold.fontFamily,
                        color: theme.colors.text
                    }]}><Trans>screen.signin.welcome</Trans></Text>
                    <Text style={[styles.description, {
                        fontFamily: theme.fonts.regular.fontFamily,
                        color: theme.secondaryColors.text
                    }]}><Trans>screen.signin.description</Trans></Text>
                </View>
                <View style={[styles.container,
                {
                    backgroundColor: theme.secondaryColors.background,
                    borderColor: theme.colors.border
                }
                ]}>
                    <Input label={t`screen.signin.user`} />
                    <Input label={t`screen.signin.password`} />
                    <View style={{ gap: 10 }}>
                        <Text style={{
                            textAlign: 'right',
                            color: theme.colors.secondary,
                            fontFamily: theme.fonts.regular.fontFamily

                        }}><Trans>screen.signin.forgot</Trans></Text>
                        <Button label={t`screen.signin.btn-sigin`} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={[styles.signup, {
                        fontFamily: theme.fonts.regular.fontFamily,
                        color: theme.secondaryColors.text
                    }]}><Trans>screen.signin.noaccount</Trans></Text>
                    <Text onPress={goToSignUp} style={[styles.signupUrl, {
                        fontFamily: theme.fonts.bold.fontFamily,
                        color: theme.colors.secondary
                    }]}><Trans>screen.signin.signup</Trans></Text>
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
