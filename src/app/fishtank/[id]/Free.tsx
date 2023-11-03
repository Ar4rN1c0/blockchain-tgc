"use client"
import {  useState } from "react"
import { useSpring, animated } from "react-spring"
import styles from "../../../components/Timetable.module.css"
import SendComponent from "@/components/Send"
import "../../../components/styles.css"

export default function Free ({ children, periode, date, fishtank }: {children: string, periode: string, date: string, fishtank: string}) {
    const [state, toggle] = useState(false)
    
    function save () {
        toggle(!state)
    }

    const fade = useSpring({
        opacity: state ? 1 : 0,
        transform: state ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: state ? 'top' : 'top',
        config: {
            duration: 110
        }
    })

    return (
        <div className="container-send">
            <div className={styles.periodeSelect} id="select-options" onClick={save}>
                {children}
            </div>
            <animated.div style={fade}>
                {state && <SendComponent fishtank={fishtank} date={date} period={periode}/>}
            </animated.div>
        </div>
    )
}