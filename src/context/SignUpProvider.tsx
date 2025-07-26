import { Fut11PositionKey, Fut7PositionKey, FutsalPositionKey, GameType } from '@screens/signup/SportScreen';
import React, { createContext, useContext, useState } from 'react';

type SignUpPersonContextType = {
    givenName: string;
    surname: string;
    birthdate: string;
};

type SignUpSportContextType = {
    game: GameType;
    position: Fut11PositionKey | Fut7PositionKey | FutsalPositionKey | null;
};

type SignUpCredentialsContextType = {
    username: string;
    password: string;
};

export type SignUpMoreSportsContextType = SignUpSportContextType[];

export type SignUpContextType = {
    person?: SignUpPersonContextType;
    sport?: SignUpSportContextType;
    moreSports?: SignUpMoreSportsContextType;
    credentials?: SignUpCredentialsContextType;
    setPerson: (person: SignUpPersonContextType) => void;
    setSport: (sport: SignUpSportContextType) => void;
    setMoreSports: (sports: SignUpMoreSportsContextType) => void;
    setCredentials: (credentials: SignUpCredentialsContextType) => void;
};

export const SignUpContext = createContext<SignUpContextType>({
    person: undefined,
    sport: undefined,
    moreSports: undefined,
    credentials: undefined,
    setPerson: () => { },
    setSport: () => { },
    setMoreSports: () => { },
    setCredentials: () => { },
});

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [person, setPerson] = useState<SignUpPersonContextType | undefined>();
    const [sport, setSport] = useState<SignUpSportContextType | undefined>();
    const [moreSports, setMoreSports] = useState<SignUpMoreSportsContextType | undefined>();
    const [credentials, setCredentials] = useState<SignUpCredentialsContextType | undefined>();

    return (
        <SignUpContext.Provider
            value={{
                person,
                sport,
                moreSports,
                credentials,
                setPerson,
                setSport,
                setMoreSports,
                setCredentials,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUp = () => useContext(SignUpContext);
