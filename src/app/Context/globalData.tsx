/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { DataType, ContextProps } from "../types/types";


export const GlobalContext = createContext<ContextProps>({
    showForm: false,
    setShowForm: (): boolean => true,
    data: {},
    setData: (): DataType => ({}),
    showImage: false,
    setShowImage: (): boolean => true
});

export const GlobalContextProvider = ({ children }: {children: ReactNode}) => {
    const [showForm, setShowForm] = useState<boolean>(true);
    const [data, setData] = useState<DataType>({});
    const [showImage, setShowImage] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ showForm, setShowForm, data, setData, showImage, setShowImage }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);