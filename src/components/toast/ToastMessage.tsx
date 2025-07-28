import { useTheme } from '@context/ThemeProvider';
import { Toast } from '@types/context';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

type Props = {
    toast: Toast;
    onClose?: () => void;
};

export default function ToastMessage({ toast, onClose }: Props) {
    const { theme } = useTheme();

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        // eslint-disable-next-line no-undef-init
        let timeout = undefined;
        if (onClose) {
            timeout = setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [opacity, onClose]);

    return (
        <Animated.View
            style={[
                styles.toast,
                {
                    backgroundColor: theme.toast.background,
                    opacity,
                },
            ]}
        >
            <Text style={[styles.text, { color: theme.toast.text }]}>
                {toast.message}
            </Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    toast: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: '70%',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 6,
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});
