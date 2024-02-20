import { Dispatch, SetStateAction } from "react";

export interface headersType {
    date: string,
    "Access-Control-Allow-Origin": string,
    "Content-Type": string
}

export interface optionsType {
    method: string
    headers: headersType
    cache: string
}

export interface configType {
    url: string
}

export interface DataType  {
    date?: string,
    period?: number | null,
    email?: string,
    name?: string,
    fishtank?: number
}

export interface ContextProps {
    showForm: boolean,
    setShowForm: Dispatch<SetStateAction<boolean>>,
    data: DataType,
    setData: Dispatch<SetStateAction<DataType>>,
    showImage ?: boolean,
    setShowImage ?: Dispatch<SetStateAction<boolean>>
}

export interface Params {
    id: string
}