import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from "@context/ThemeProvider";
import { Theme } from '@constants/theme';

type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    value: string,
    onChange: (value: any) => void,
    options: Option[],
    label?: string,
    mode?: 'dialog' | 'dropdown'
}

function android(theme: Theme, value: string, onChange: (value: any) => void, options: Option[], mode?: 'dialog' | 'dropdown', label?: string) {
    return <View style={styles.container}>
        {label && <Text style={[{
            color: theme.colors.text,
            fontFamily: theme.fonts.regular.fontFamily
        }]}>{label}</Text>}
        <View style={[styles.pickerWrapper, {
            borderColor: theme.colors.border,
            backgroundColor: theme.secondaryColors.background
        }]}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={[styles.picker, {
                    color: theme.colors.text,
                }]}
                mode={mode}
            >
                {options.map(({ label, value }) => (
                    <Picker.Item style={{
                        color: theme.colors.text,
                        backgroundColor: theme.secondaryColors.background,
                    }} key={value} label={label} value={value} />
                ))}
            </Picker>
        </View>
    </View>;
}

export default function Select({ label, value, onChange = () => { }, options = [], mode = 'dropdown' }: SelectProps) {
    const { theme } = useTheme();

    if (Platform.OS === 'android') {
        return android(theme, value, onChange, options, mode, label);
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    picker: {
        height: 50,
        width: 150,
        marginLeft: 10,
    },
    pickerWrapper: {
        borderRadius: 5,
        borderWidth: 1
    }
});

