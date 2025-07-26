import React, { createContext, useContext, useState } from 'react';

type SignUpPersonContextType = {
    givenName: string;
    surname: string;
    birthDate: string;
};

type SignUpSportContextType = {
    gameType: string;
    position: string;
};

type SignUpCredentialsContextType = {
    username: string;
    password: string;
};

type SignUpMoreSportsContextType = SignUpSportContextType[];

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
