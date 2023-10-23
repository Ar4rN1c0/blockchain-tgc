"use client"
import { useEffect, useState } from "react"
import styles from "../../../components/Timetable.module.css"

export default function Free ({ children, properties }: {children: string, properties: string}) {
    function save () {
        fetch("https://")
    }
    
    useEffect(() => {
        // const elements = document.querySelectorAll("#select-options")
        // elements.forEach(element => {
        //     element.addEventListener("click", () => {
        //         console.log(element.properties)
        //     })
        // })
    }, [])

    return (
        <div className={styles.periodeSelect} id="select-options" onClick={save}>
            {children}
        </div>
    )
}