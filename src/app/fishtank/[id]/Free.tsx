"use client"
import { useEffect, useState } from "react"

export default function Free ({ children }: {children: string}) {
    useEffect(() => {
        const consola = () => console.log(200)
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}