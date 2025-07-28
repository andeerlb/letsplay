import type { Fut11PositionKey, Fut7PositionKey, FutsalPositionKey, GameType } from "@types/game";
import type { Layout, Theme } from "@types/theme";

export type SignUpPersonContextType = {
    givenName: string;
    surname: string;
    birthdate: string;
};

export type SignUpSportContextType = {
    game: GameType;
    position: Fut11PositionKey | Fut7PositionKey | FutsalPositionKey | null;
};

export type SignUpMoreSportsContextType = SignUpSportContextType[];

export type SignUpContextType = {
    person?: SignUpPersonContextType;
    sport?: SignUpSportContextType;
    moreSports?: SignUpMoreSportsContextType;
    setPerson: (person: SignUpPersonContextType) => void;
    setSport: (sport: SignUpSportContextType) => void;
    setMoreSports: (sports: SignUpMoreSportsContextType) => void;
};

export type ThemeContextType = {
    theme: Theme;
};

export type UseThemeProps = {
    theme: Theme;
    layout: Layout,
    changeTheme: (layout: Layout) => void;
};

export type ToastType = 'info' | 'success' | 'error' | 'warn';

export type Toast = {
    id: string;
    message: string;
    type: ToastType;
    autoClose?: boolean
};

export type ToastContextType = {
    toasts: Toast[];
    showToast: (message: string, type?: ToastType, autoClose?: boolean) => void;
    removeToast: (id: string) => void;
};