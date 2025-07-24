import { useTheme } from '@context/ThemeProvider';
import { t } from '@lingui/core/macro';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

type Props = {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string | null;
};

const Birthdate: React.FC<Props> = ({
    label,
    value,
    onChangeText,
    error,
}) => {
    const { theme } = useTheme();
    const lastValidDate = useRef<string>(value);
    const [localError, setLocalError] = useState<string | null>(null);

    const handleChange = (formatted: string, extracted?: string) => {
        if (extracted && extracted.length === 8) {
            const day = parseInt(extracted.slice(0, 2), 10);
            const month = parseInt(extracted.slice(2, 4), 10);
            const year = parseInt(extracted.slice(4, 8), 10);

            const date = new Date(year, month - 1, day);

            const now = new Date();

            if (
                !isNaN(date.getTime()) &&
                date.getDate() === day &&
                date.getMonth() === month - 1 &&
                date.getFullYear() === year &&
                date <= now
            ) {
                lastValidDate.current = formatted;
                setLocalError(null);
                onChangeText(formatted);
            } else {
                setLocalError(t`component.birthday.invalid.date`);
                onChangeText(lastValidDate.current);
            }
        } else {
            setLocalError(null);
            onChangeText(formatted);
        }
    };

    useEffect(() => {
        lastValidDate.current = value;
    }, [value]);

    return (
        <View style={styles.container}>
            {label && (
                <Text style={[styles.label, {
                    color: theme.colors.text,
                    fontFamily: theme.fonts.regular.fontFamily,
                }]}>
                    {label}
                </Text>
            )}
            <TextInputMask
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
                            error || localError
                                ? theme.colors.formError
                                : theme.colors.border,
                    },
                ]}
                maxLength={10}
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
    }
});

export default Birthdate;