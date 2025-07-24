import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

type Props = {
    onChange: (date: Date | null) => void;
    initialDate?: Date;
    label?: string;
};

const BirthdateComponent: React.FC<Props> = ({
    onChange = () => { },
    initialDate,
    label = 'Data de nascimento',
}) => {
    const [text, setText] = useState(
        initialDate
            ? `${('0' + initialDate.getDate()).slice(-2)}/${('0' + (initialDate.getMonth() + 1)).slice(-2)}/${initialDate.getFullYear()}`
            : ''
    );
    const lastValidDate = useRef<Date | null>(initialDate || null);

    const handleChange = (formatted: string, extracted?: string) => {
        setText(formatted);

        if (extracted && extracted.length === 8) {
            const day = parseInt(extracted.slice(0, 2), 10);
            const month = parseInt(extracted.slice(2, 4), 10);
            const year = parseInt(extracted.slice(4, 8), 10);

            const date = new Date(year, month - 1, day);

            // Validação rigorosa:
            if (
                !isNaN(date.getTime()) &&
                date.getDate() === day &&
                date.getMonth() === month - 1 &&
                date.getFullYear() === year
            ) {
                lastValidDate.current = date;
                onChange(date);
            } else {
                // Data inválida: restaura o último valor válido no input
                if (lastValidDate.current) {
                    const d = lastValidDate.current;
                    const validText = `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
                    setText(validText);
                } else {
                    // Nenhum valor válido ainda, limpa
                    setText('');
                    onChange(null);
                }
            }
        } else {
            // Data incompleta (menos de 8 dígitos), você pode resetar onChange se quiser
            onChange(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY',
                }}
                value={text}
                onChangeText={handleChange}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                style={styles.input}
                maxLength={10}
            />
        </View>
    );
};

export default BirthdateComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});
