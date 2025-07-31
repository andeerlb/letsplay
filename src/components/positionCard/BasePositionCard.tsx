import { useTheme } from "@hooks/useTheme";
import { MessageDescriptor } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PositionDetails = Record<
    string,
    {
        title: MessageDescriptor;
        description: MessageDescriptor;
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
        paddingHorizontal: 20,
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
    },
    description: {
        fontSize: 15,
        textAlign: "center",
    },
});
