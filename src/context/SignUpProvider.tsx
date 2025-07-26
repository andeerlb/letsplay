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

export type SignUpMoreSportsContextType = SignUpSportContextType[];

export type SignUpContextType = {
    person?: SignUpPersonContextType;
    sport?: SignUpSportContextType;
    moreSports?: SignUpMoreSportsContextType;
    setPerson: (person: SignUpPersonContextType) => void;
    setSport: (sport: SignUpSportContextType) => void;
    setMoreSports: (sports: SignUpMoreSportsContextType) => void;
};

export const SignUpContext = createContext<SignUpContextType>({
    person: undefined,
    sport: undefined,
    moreSports: undefined,
    setPerson: () => { },
    setSport: () => { },
    setMoreSports: () => { },
});

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [person, setPerson] = useState<SignUpPersonContextType | undefined>();
    const [sport, setSport] = useState<SignUpSportContextType | undefined>();
    const [moreSports, setMoreSports] = useState<SignUpMoreSportsContextType | undefined>();

    return (
        <SignUpContext.Provider
            value={{
                person,
                sport,
                moreSports,
                setPerson,
                setSport,
                setMoreSports,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUp = () => useContext(SignUpContext);
