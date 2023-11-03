import styles from './Timetable.module.css';
import getDates from "@/functions/getDates";
import getPeriod from "@/functions/getPeriod";
import Occupied from '../app/fishtank/[id]/Occupied';
import Free from '../app/fishtank/[id]/Free'; 

const getOcc = () => {
    return fetch("http://localhost:3001/array", {cache: 'no-store'}).then(res => res.json())
} 


function fetchData (date: string) {
    const options = {method: 'GET', headers: {date: date}, cache: 'no-store'};
    return fetch('https://v57nr3jh-3000.uks1.devtunnels.ms/api/get/fishtank/1', options)
   .then(response => response.json())
}


interface reservaType {
    period: string,
    wallet: string
}


export default async function PeriodesMAtrix ( {fishtank}: {fishtank: string} ) {

    const { today, tomorrow, next } = getDates();
    let dates = [today, tomorrow, next]
    const periodos = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const dataToday = await fetchData(today)
    const freesToday = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataToday.some((reserva: reservaType) => reserva.period === periodo),
    }));
    const dataTomorrow = await fetchData(tomorrow)
    const freesTomorrow = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataTomorrow.some((reserva: reservaType) => reserva.period === periodo),
    }))
    const dataNext = await fetchData(next)
    const freesNext = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataNext.some((reserva: reservaType) => reserva.period === periodo),
    }))
    console.log(freesToday)


    return (
        <section>
            <h1>
                Fishtank {fishtank}
            </h1>
            <section className={styles.timetable}>
                <div className={styles.cols} id={today}>          
                    <label>{today}</label>
                    {freesToday.map((period, index: number) => (
                            period.IsOcc ? <Occupied key={period.period}></Occupied> : <div><Free key={period.period} fishtank={fishtank} periode={`${index+1}`} date={`${today}`}>{`${getPeriod(index)}`}</Free></div>
                        ))}
                </div>
                <div className={styles.cols} id={tomorrow}>
                    <label>{tomorrow}</label>
                    {freesTomorrow.map((period, index: number) => (
                            period.IsOcc ? <Occupied key={period.period}></Occupied> : <Free key={period.period} fishtank={fishtank} periode={`${index+1}`} date={`${tomorrow}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                <div className={styles.cols} id={next}>
                    <label>{next}</label>
                    {freesNext.map((period, index: number) => (
                            period.IsOcc ? <Occupied key={period.period}></Occupied> : <Free key={period.period} fishtank={fishtank}  periode={`${index+1}`} date={`${tomorrow}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                
                <div>

                </div>
            </section>
        </section>

    )
}