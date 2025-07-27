
import type { SignUpContextType, SignUpMoreSportsContextType, SignUpPersonContextType, SignUpSportContextType } from '@types/context';
import React, { createContext, useContext, useState } from 'react';


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
