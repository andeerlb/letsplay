import { useTheme } from '@context/ThemeProvider';
import { Toast } from '@tps/context';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    toast: Toast;
    clear: (id: string) => void;
};

export default function ToastMessage({ toast, clear }: Props) {
    const { theme } = useTheme();
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        let timeout: NodeJS.Timeout | undefined;
        if (toast.autoClose) {
            timeout = setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(({ finished }) => {
                    if (finished) {
                        clear(toast.id);
                    }
                });
            }, 2000);
        }

        return () => timeout && clearTimeout(timeout);
    }, [opacity, clear, toast.id, toast.autoClose]);

    return (
        <Animated.View
            style={[
                styles.toast,
                { backgroundColor: theme.toast[toast.type], opacity },
            ]}
        >
            <View style={styles.textContainer}>
                <Text style={[styles.text, { color: theme.toast.text }]}>
                    {toast.message}
                </Text>
            </View>
            {!toast.autoClose && <TouchableOpacity onPress={() => clear(toast.id)}>
                <Text style={styles.close}>x</Text>
            </TouchableOpacity>}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    toast: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 20,
        borderRadius: 8,
        maxWidth: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 6,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    closeWrapper: {
        position: 'absolute',
        top: 4,
        right: 6,
    },
    close: {
        fontFamily: 'Armavir01-Bold',
        color: '#ccc',
        fontSize: 18,
    },
});

