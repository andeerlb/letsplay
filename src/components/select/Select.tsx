import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@hooks/theme';

type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    label?: string,
    defaultValue?: string,
    onChange: (value: any) => void,
    options: Option[]
}

export default function Select({ label, defaultValue, onChange = () => { }, options = [] }: SelectProps) {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            {label && <Text style={[{ color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>{label}</Text>}
            <Picker
                selectedValue={defaultValue}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={[styles.picker, { color: theme.colors.text, backgroundColor: theme.colors.background }]}
                mode="dropdown"
            >
                {options.map(({ label, value }) => (
                    <Picker.Item style={{ color: theme.colors.text, backgroundColor: theme.colors.background }} key={value} label={label} value={value} />
                ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    picker: {
        height: 50,
        width: 200,
    },
});
