import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
    label: string;
    onPress: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({ label, onPress, disabled, style, textStyle }) => {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                disabled && styles.disabled,
                pressed && !disabled && styles.pressed,
                style
            ]}
        >
            <Text style={[styles.text, textStyle]}>
                {label}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#256b35',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    pressed: {
        opacity: 0.75,
    },
    disabled: {
        backgroundColor: '#999',
    },
});

export default Button;
