
"use client";
import { useGlobalContext } from "../Context/globalData";
import Form from "./Form";

export default function FormCont () {
    const  {showForm} = useGlobalContext();
    return (
        <>
            {showForm && <Form />}
        </>
    );}