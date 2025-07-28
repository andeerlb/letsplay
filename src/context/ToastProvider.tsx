import ToastMessage from '@components/toast/ToastMessage';
import { Toast, ToastContextType, ToastType } from '@types/context';
import React, { createContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const insets = useSafeAreaInsets();

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const showToast = (message: string, type: ToastType = 'info', autoClose = true) => {
        if (toasts.length > 5) return;
        const id = Math.random().toString(36).substring(2, 10)
        setToasts((prev) => [...prev, { id, message, type, autoClose }]);

        if (autoClose) {
            setTimeout(() => {
                removeToast(id);
            }, 2000);
        }
    };

    return (
        <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
            {children}
            <View pointerEvents="box-none" style={[styles.toastContainer, { marginTop: insets.top + 5 }]}>
                {toasts.slice().reverse().map((toast) => (
                    <ToastMessage key={toast.id} toast={toast} onClose={toast.autoClose ? () => removeToast(toast.id) : undefined} />
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
