
import type { SignUpContextType, SignUpMoreSportsContextType, SignUpPersonContextType, SignUpSportContextType } from '@tps/context';
import React, { createContext, useContext, useState } from 'react';


export const SignUpContext = createContext<SignUpContextType>({
    person: undefined,
    preferredSport: undefined,
    otherSports: undefined,
    setPerson: () => { },
    setPreferredSport: () => { },
    setOtherSports: () => { },
});

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [person, setPerson] = useState<SignUpPersonContextType | undefined>();
    const [preferredSport, setPreferredSport] = useState<SignUpSportContextType | undefined>();
    const [otherSports, setOtherSports] = useState<SignUpMoreSportsContextType | undefined>();

    return (
        <SignUpContext.Provider
            value={{
                person,
                preferredSport,
                otherSports,
                setPerson,
                setPreferredSport,
                setOtherSports,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUp = () => useContext(SignUpContext);
