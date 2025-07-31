import type { Fut11PositionKey, Fut7PositionKey, FutsalPositionKey, GameType } from "@tps/game";

export type SignUpPersonContextType = {
    givenName: string;
    surname: string;
    birthdate: string;
    nickname: string;
};

export type SignUpPositionsContextType = Fut11PositionKey | Fut7PositionKey | FutsalPositionKey | null;

export type SignUpSportContextType = {
    type: GameType;
    position: SignUpPositionsContextType
};

export type SignUpMoreSportsContextType = SignUpSportContextType[];

export type SignUpContextType = {
    person?: SignUpPersonContextType;
    preferredSport?: SignUpSportContextType;
    otherSports?: SignUpMoreSportsContextType;
    setPerson: (person: SignUpPersonContextType) => void;
    setPreferredSport: (sport: SignUpSportContextType) => void;
    setOtherSports: (sports: SignUpMoreSportsContextType) => void;
};

export type ToastType = 'info' | 'success' | 'error' | 'warn';

export type Toast = {
    id: string;
    message: string;
    type: ToastType;
    autoClose?: boolean
};

export type ToastContextType = {
    error: (message: string, autoClose?: boolean) => string;
    success: (message: string, autoClose?: boolean) => string;
    warn: (message: string, autoClose?: boolean) => string;
    info: (message: string, autoClose?: boolean) => string;
    clear: (id: string) => void;
    clearAll: () => void;
};