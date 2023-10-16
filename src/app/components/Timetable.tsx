"use client"
import { useEffect } from 'react';
import styles from "./Timetable.module.css"


export default function Timetable({ fishTank }: { fishTank: number }) {
    function getDates() {
        const today = new Date();
        const dates = [today.toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid' })];
      
        for (let i = 1; i <= 3; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          dates.push(date.toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid' }));
        }
        
      
        return { today: dates[0], tomorrow: dates[1], next: dates[2], nextNext: dates[3] };
    }
      
    const { today, tomorrow, next, nextNext } = getDates();

    interface Obj {
        [key: number]: string
    }
    function getPeriod (periodId: number) {
        const Obj: Obj = {
            1: "8:30-9:20",
            2: "9:20-10:10",
            3: "10:30-11:20",
            4: "11:20-12:10",
            5: "12:10-13:00",
            6: "13:00-13:50"
        }
        if(periodId in Obj) {
            return Obj[periodId]
        } else {
            console.log("Err")
        }
    }

    useEffect(() => {
        const tablePeriodes = document.querySelectorAll('.Timetable_periodeSelect__rodAI')
        tablePeriodes.forEach((period) => {
            period.addEventListener('click', () => {
                const timeRange = getPeriod(parseInt(period.id))
                const url = `https://la-api-de-joaquin/${fishTank}?date=${period.parentElement.id}&period=${timeRange}`
                console.log(url)
            })
        })

    },[0])

    return (
        <section className={styles.timetable}>
            <div className={styles.cols} id={today}>          
                <label>{today}</label>
                <div className={styles.periodeSelect} id="1">Periode 1</div>
                <div className={styles.periodeSelect} id="2">Periode 2</div>
                <div className={styles.periodeSelect} id="3">Periode 3</div>
                <div className={styles.periodeSelect} id="4">Periode 4</div>
                <div className={styles.periodeSelect} id="5">Periode 5</div>
                <div className={styles.periodeSelect} id="6">Periode 6</div>
            </div>
            <div className={styles.cols} id={tomorrow}>
            <label>{tomorrow}</label>
                <div className={styles.periodeSelect} id="1">Periode 1</div>
                <div className={styles.periodeSelect} id="2">Periode 2</div>
                <div className={styles.periodeSelect} id="3">Periode 3</div>
                <div className={styles.periodeSelect} id="4">Periode 4</div>
                <div className={styles.periodeSelect} id="5">Periode 5</div>
                <div className={styles.periodeSelect} id="6">Periode 6</div>
            </div>
            <div className={styles.cols} id={next}>
            <label>{next}</label>
                <div className={styles.periodeSelect} id="1">Periode 1</div>
                <div className={styles.periodeSelect} id="2">Periode 2</div>
                <div className={styles.periodeSelect} id="3">Periode 3</div>
                <div className={styles.periodeSelect} id="4">Periode 4</div>
                <div className={styles.periodeSelect} id="5">Periode 5</div>
                <div className={styles.periodeSelect} id="6">Periode 6</div>
            </div>
            <div className={styles.cols} id={nextNext}>
            <label>{nextNext}</label>
                <div className={styles.periodeSelect} id="1">Periode 1</div>
                <div className={styles.periodeSelect} id="2">Periode 2</div>
                <div className={styles.periodeSelect} id="3">Periode 3</div>
                <div className={styles.periodeSelect} id="4">Periode 4</div>
                <div className={styles.periodeSelect} id="5">Periode 5</div>
                <div className={styles.periodeSelect} id="6">Periode 6</div>
            </div>
            
        </section>
    )
}
