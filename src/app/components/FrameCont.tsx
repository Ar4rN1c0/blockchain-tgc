/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useGlobalContext } from "../Context/globalData";
import Frame from "./Frame";

export default function FrameCont () {
    const {showImage} = useGlobalContext();
    return (
        <>
            {showImage && <Frame />}
        </>
    );
}