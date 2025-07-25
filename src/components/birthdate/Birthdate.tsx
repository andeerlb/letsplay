import { useTheme } from '@context/ThemeProvider';
import React, {
    useRef,
    forwardRef,
    useImperativeHandle
} from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

type Props = TextInputProps & {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string | null;
};

interface TextInputMaskWithGetElement extends TextInputMask {
    getElement: () => TextInput;
}

const Birthdate = forwardRef<TextInput, Props>(({
    label,
    value,
    onChangeText,
    error,
    ...rest
}, ref) => {
    const { theme } = useTheme();
    const inputRef = useRef<TextInputMaskWithGetElement>(null);

    useImperativeHandle(ref, () => inputRef.current?.getElement() as TextInput ?? null);

    const handleChange = (formatted: string) => {
        onChangeText(formatted);
    };

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
            <TextInputMask
                ref={inputRef}
                type={'datetime'}
                options={{ format: 'DD/MM/YYYY' }}
                value={value}
                onChangeText={handleChange}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                style={[
                    styles.input,
                    {
                        color: theme.colors.text,
                        backgroundColor: theme.secondaryColors.background,
                        borderColor:
                            error
                                ? theme.colors.formError
                                : theme.colors.border,
                    },
                ]}
                maxLength={10}
                {...rest}
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

export default Birthdate;
