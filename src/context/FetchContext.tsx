import React, { createContext, useState } from 'react';

// Lo usaré para decirle a React como luce y que expone el context
export interface FetchContextProps {
    FetchCarrousel: boolean;
    FetchUpcoming: boolean;
    FetchBanner: boolean;
    FetchTopAnime: boolean;
    AnimeFetch: boolean;
    HandleFetchCarrousel: (value:boolean) => void;
    HandleFetchUpcoming: (value:boolean) => void;
    HandleFetchBanner: (value:boolean) => void;
    HandleFetchTopAnime: (value:boolean) => void;
    HandleAnimeFetch: (value:boolean) => void;
}

// Crear el context
export const FetchContext = createContext({} as FetchContextProps);

// Componente que provee del estado del context
export const AnimeFavsProvider = ({ children }: any) => {
    const [FetchCarrousel, setFetchCarrousel] = useState<boolean>(false);
    const [FetchUpcoming, setFetchUpcoming] = useState<boolean>(false);
    const [FetchBanner, setFetchBanner] = useState<boolean>(false);
    const [FetchTopAnime, setFetchTopAnime] = useState<boolean>(false);
    const [AnimeFetch, setAnimeFetch] = useState<boolean>(false);

    const HandleFetchCarrousel = (value:boolean) => {
        setFetchCarrousel(value);
     }
    const HandleFetchUpcoming = (value:boolean) => {
        setFetchUpcoming(value);
    }
    const HandleFetchBanner = (value:boolean) => { 
        setFetchBanner(value);
    }
    const HandleFetchTopAnime = (value:boolean) => { 
        setFetchTopAnime(value);
    }

    const HandleAnimeFetch = (value:boolean) => {
        setAnimeFetch(value);
    }

    return (
        <FetchContext.Provider
            value={{
                FetchCarrousel,
                FetchUpcoming,
                FetchBanner,
                FetchTopAnime,
                AnimeFetch,
                HandleFetchCarrousel,
                HandleFetchUpcoming,
                HandleFetchBanner,
                HandleFetchTopAnime,
                HandleAnimeFetch
            }}>
            {children}
        </FetchContext.Provider>
    );
};
