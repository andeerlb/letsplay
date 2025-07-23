import { useTheme } from '@context/ThemeProvider';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type InputProps = {
    label?: string
    placeholder?: string
}

const Input = ({ placeholder = '', label }: InputProps) => {
    const { theme } = useTheme();
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, {
                color: theme.colors.text,
                fontFamily: theme.fonts.regular.fontFamily
            }]}>{label}</Text>}
            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.secondaryColors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.text,
                    fontFamily: theme.fonts.regular.fontFamily
                }]}
                placeholder={placeholder}
                value={text}
                onChangeText={setText}
                placeholderTextColor={theme.secondaryColors.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    label: {
        fontSize: 15
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
