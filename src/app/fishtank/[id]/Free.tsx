"use client"
import { useEffect, useState } from "react"
import styles from "../../../components/Timetable.module.css"

export default function Free ({ children }: {children: string}) {
    useEffect(() => {
        const consola = () => console.log(200)
    }, [])

    return (
        <div className={styles.periodeSelect}>
            {children}
        </div>
    )
}