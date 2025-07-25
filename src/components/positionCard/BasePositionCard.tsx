import { useTheme } from "@context/ThemeProvider";
import { MessageDescriptor } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PositionDetails = Record<
    string,
    {
        title: MessageDescriptor;
        description: MessageDescriptor;
        background: string;
    }
>;

type Props<T extends PositionDetails, K extends keyof T> = {
    details: T;
    position: K;
};

export function BasePositionCard<T extends PositionDetails, K extends keyof T>({
    details,
    position,
}: Props<T, K>) {
    const detail = details[position];
    const { theme } = useTheme();
    const { i18n } = useLingui();

    return (
        <View
            style={[
                styles.card,
                {
                    borderColor: theme.colors.primary,
                    backgroundColor: detail.background,
                },
            ]}
        >
            <Text
                style={[
                    styles.title,
                    {
                        color: theme.colors.text,
                        fontFamily: theme.fonts.logoBold.fontFamily,
                    },
                ]}
            >
                {i18n._(detail.title)}
            </Text>
            <Text
                style={[
                    styles.description,
                    {
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                    },
                ]}
            >
                {i18n._(detail.description)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        borderRadius: 5,
        borderWidth: .5,
        paddingHorizontal: 20,
        paddingVertical: 40,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
    },
});
