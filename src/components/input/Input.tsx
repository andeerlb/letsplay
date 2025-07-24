import { useTheme } from '@context/ThemeProvider';
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type InputProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onBlur?: () => void;
    secureTextEntry?: boolean;
    error?: string | null;
}

const Input = (props: InputProps) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            {props.label && (
                <Text
                    style={[
                        styles.label,
                        {
                            color: theme.colors.text,
                            fontFamily: theme.fonts.regular.fontFamily,
                        },
                    ]}
                >
                    {props.label}
                </Text>
            )
            }
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: theme.secondaryColors.background,
                        borderColor: props.error ? theme.colors.formError : theme.colors.border,
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    },
                ]}
                placeholder={props.placeholder}
                placeholderTextColor={theme.secondaryColors.text}
                value={props.value}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                secureTextEntry={props.secureTextEntry ?? false}
            />
        </View >
    );
};

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

export default Input;