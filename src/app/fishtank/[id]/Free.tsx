"use client"
import { useEffect, useState } from "react"
import styles from "../../../components/Timetable.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "styles.css"

export default function Free ({ children, periode, date }: {children: string, periode: string, date: string}) {
    function save () {
        return (
            <h1>Hola</h1>
        )
    }
    let data = {
        periode: periode,
        date: date
    }


    return (
        <div className={styles.periodeSelect} id="select-options" onClick={save}>
            {children}
        </div>
    )
}