import { useTheme } from '@context/ThemeProvider';
import { t } from '@lingui/core/macro';
import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

type InputEmailProps = TextInputProps & {
    label?: string;
    error?: string;
};

const InputEmail = forwardRef<TextInput, InputEmailProps>(({
    label,
    value,
    onChangeText,
    onBlur,
    error,
    placeholder,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
}, ref) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            {label && (
                <Text
                    style={[
                        styles.label,
                        {
                            color: theme.colors.text,
                            fontFamily: theme.fonts.regular.fontFamily,
                        },
                    ]}
                >
                    {label}
                </Text>
            )}
            <TextInput
                ref={ref}
                style={[
                    styles.input,
                    {
                        backgroundColor: theme.secondaryColors.background,
                        borderColor: error ? theme.colors.formError : theme.colors.border,
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    },
                ]}
                placeholder={placeholder || t`component.input-email.placeholder`}
                placeholderTextColor={theme.secondaryColors.text}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                blurOnSubmit={blurOnSubmit}
            />
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
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 15,
    },
});

export default InputEmail;
