import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Trans } from '@lingui/react/macro';
import { useTheme } from '@context/ThemeContext';
import { FontDefinition } from '@constants/theme';

export default function Select({ label='', defaultValue, onChange=() => {}, options=[] }) {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: theme.primary.text }]}><Trans>{label}</Trans></Text>
            <Picker
                selectedValue={defaultValue}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={[styles.picker, { color: theme.primary.text, backgroundColor: theme.secondary.background }]}
                mode="dropdown"
            >
                {options.map(({ label, value }) => (
                    <Picker.Item style={{ color: theme.primary.text, backgroundColor: theme.secondary.background }} key={value} label={label} value={value} />
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
    text: {
        fontFamily: FontDefinition.general.regular,
    },
    picker: {
        height: 50,
        width: 150,
    },
});
