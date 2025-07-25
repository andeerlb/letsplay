import React, { useState, forwardRef } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text, TextInputProps } from "react-native";
import { useTheme } from "@context/ThemeProvider";
import EyeOpen from "@assets/icons/eye-open.svg";
import EyeClosed from "@assets/icons/eye-close.svg";

type InputPasswordProps = TextInputProps & {
    label?: string;
    error?: string;
};

const InputPassword = forwardRef<TextInput, InputPasswordProps>(({
    label,
    placeholder,
    value,
    onChangeText,
    onBlur,
    error,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
}, ref) => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            {label && (
                <Text style={[styles.label, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>
                    {label}
                </Text>
            )}
            <View style={[
                styles.inputContainer,
                {
                    borderColor: error ? theme.colors.formError : theme.colors.border,
                    backgroundColor: theme.secondaryColors.background
                }]}>
                <TextInput
                    ref={ref}
                    style={[styles.input, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}
                    placeholder={placeholder}
                    placeholderTextColor={theme.secondaryColors.text}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    keyboardType="default"
                    autoComplete="password"
                    textContentType="password"
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={blurOnSubmit}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                    {showPassword ? (
                        <EyeOpen color={theme.secondaryColors.text} height={20} width={20} />
                    ) : (
                        <EyeClosed color={theme.secondaryColors.text} height={20} width={20} />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    label: {
        fontSize: 15,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
    },
    iconContainer: {
        marginLeft: 10,
    },
});

export default InputPassword;
