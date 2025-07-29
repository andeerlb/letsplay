import ToastMessage from '@components/toast/ToastMessage';
import { Toast, ToastContextType, ToastType } from '@tps/context';
import React, { createContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const insets = useSafeAreaInsets();

    const clear = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const clearAll = () => {

    }

    const showToast = (message: string, type: ToastType, autoClose = true): string => {
        if (toasts && toasts.length > 5) {
            clear(toasts[toasts.length - 1].id);
        }
        const id = Math.random().toString(36).substring(2, 10) + 'type';
        setToasts((prev) => [...prev, { id, message, type, autoClose }]);
        return id;
    };

    const info = (message: string, autoclose = true): string => {
        return showToast(message, 'info', autoclose);
    }

    const warn = (message: string, autoclose = true): string => {
        return showToast(message, 'warn', autoclose);
    }

    const success = (message: string, autoclose = true): string => {
        return showToast(message, 'success', autoclose);
    }

    const error = (message: string, autoclose = true): string => {
        return showToast(message, 'error', autoclose);
    }

    return (
        <ToastContext.Provider value={{ info, warn, success, error, clear, clearAll }}>
            {children}
            <View pointerEvents="box-none" style={[styles.toastContainer, { marginTop: insets.top + 5 }]}>
                {toasts.slice().reverse().map((toast) => (
                    <ToastMessage key={toast.id} toast={toast} clear={clear} />
                ))}
            </View>
        </ToastContext.Provider>
    );
};

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 9999,
        alignItems: 'center',
        gap: 10,
    },
});
