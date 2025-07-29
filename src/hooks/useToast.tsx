import { ToastContext } from '@context/ToastProvider';
import { useContext } from 'react';

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast should be used inside of <ToastProvider>');
    return ctx;
}
