import { useTheme } from '@context/ThemeProvider';
import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
    label?: string;
    error?: string | null;
};

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
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
            )}
            <TextInput
                ref={ref}
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
                returnKeyType={props.returnKeyType}
                onSubmitEditing={props.onSubmitEditing}
                blurOnSubmit={props.blurOnSubmit}
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

export default Input;