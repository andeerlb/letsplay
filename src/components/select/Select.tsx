import React, { use } from 'react';
import { View, StyleSheet, Text, Platform, ActionSheetIOS, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from "@context/ThemeProvider";
import { Theme } from '@constants/theme';
import { useLingui } from '@lingui/react/macro';

type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    value: string;
    onChange: (value: any) => void;
    options: Option[]
    label?: string;
    mode?: 'dialog' | 'dropdown';
    fullWidth?: boolean;
    width?: number;
    error?: string;
};

function renderPickerItems(
    theme: Theme,
    options: Option[],
    placeholder: string
) {

    return [
        <Picker.Item
            key="placeholder"
            label={placeholder}
            value=""
            style={{
                color: theme.colors.text,
                backgroundColor: theme.secondaryColors.background,
            }}
        />,
        ...options.map(({ label, value }) => (
            <Picker.Item
                key={value}
                label={label}
                value={value}
                style={{
                    color: theme.colors.text,
                    backgroundColor: theme.secondaryColors.background,
                }}
            />
        ))
    ];
}

function ios(
    theme: Theme,
    value: string,
    onChange: (value: any) => void,
    options: Option[],
    placeholder: string,
    cancel: string,
    mode?: 'dialog' | 'dropdown',
    label?: string,
    error?: string,
) {
    const selectedOption = options.find(option => option.value === value);
    const displayValue = selectedOption ? selectedOption.label : placeholder;

    const showActionSheet = () => {
        const actionOptions = [
            ...options.map(option => option.label),
            cancel
        ];

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: actionOptions,
                cancelButtonIndex: actionOptions.length - 1,
                title: label,
            },
            (buttonIndex) => {
                if (buttonIndex < actionOptions.length - 1) {
                    onChange(options[buttonIndex].value);
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            {label && (
                <Text
                    style={{
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    }}
                >
                    {label}
                </Text>
            )}
            <TouchableOpacity
                style={[
                    styles.pickerWrapper,
                    {
                        borderColor: error ? theme.colors.formError : theme.colors.border,
                        backgroundColor: theme.secondaryColors.background,
                        width: 'auto',
                        height: 50,
                        justifyContent: 'center',
                        paddingHorizontal: 15,
                    },
                ]}
                onPress={showActionSheet}
            >
                <Text
                    style={{
                        color: theme.colors.text,
                        fontSize: 18,
                    }}
                >
                    {displayValue}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

function android(
    theme: Theme,
    value: string,
    onChange: (value: any) => void,
    options: Option[],
    placeholder: string,
    mode?: 'dialog' | 'dropdown',
    label?: string,
    error?: string,
) {
    return (
        <View style={styles.container}>
            {label && (
                <Text
                    style={{
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    }}
                >
                    {label}
                </Text>
            )}
            <View
                style={[
                    styles.pickerWrapper,
                    {
                        borderColor: error ? theme.colors.formError : theme.colors.border,
                        backgroundColor: theme.secondaryColors.background,
                        width: '100%',
                    },
                ]}
            >
                <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={[styles.picker, { color: theme.colors.text }]}
                    mode={mode}
                >
                    {renderPickerItems(theme, options, placeholder)}
                </Picker>
            </View>
        </View>
    );
}

export default function Select({
    label,
    value,
    onChange = () => { },
    options = [],
    mode = 'dropdown',
    error,
}: SelectProps) {
    const { theme } = useTheme();
    const { t } = useLingui();
    const placeholder = t`component.select.placeholder`;

    return Platform.OS === 'ios'
        ? ios(theme, value, onChange, options, placeholder, t`component.select.cancel`, mode, label, error)
        : android(theme, value, onChange, options, placeholder, mode, label, error);
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'space-between',
    },
    picker: {
        height: 50,
        marginLeft: 10,
    },
    pickerWrapper: {
        borderRadius: 5,
        borderWidth: 1,
    },
});