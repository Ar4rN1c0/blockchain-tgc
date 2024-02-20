"use client";

import styles from "@/app/styles/Free.module.css";
import { useGlobalContext } from "../Context/globalData";
import { useParams } from "next/navigation";

export default function FreeFunc({ period, date }: { period: number, date: string }) {
    const { showForm, setShowForm, data, setData } = useGlobalContext();
    const params = useParams<{ id: string }>();
    const fisht = parseInt(params.id);
    function handleClick() {
        setShowForm(true);
        console.log(showForm);
        const prevData = { ...data };
        prevData.period = period;
        prevData.date = date;
        prevData.fishtank = fisht;
        setData(prevData);
    }

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div id="freeEl" onClick={handleClick} className={styles.freeParr}><p>Period {period}</p></div>
    );
}