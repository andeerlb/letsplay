import { useTheme } from '@context/ThemeProvider';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type InputProps = {
    label?: string;
    value?: string;
};

const InputEmail = (props: InputProps) => {
    const { theme } = useTheme();
    const [text, setText] = useState(props.value);

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
                style={[
                    styles.input,
                    {
                        backgroundColor: theme.secondaryColors.background,
                        borderColor: theme.colors.border,
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    },
                ]}
                placeholder="email@example.com"
                value={text}
                onChangeText={setText}
                placeholderTextColor={theme.secondaryColors.text}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
            />
        </View>
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

export default InputEmail;
