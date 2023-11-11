import styles from '@/styles/Timetable.module.css';
import getPeriod from '@/functions/getPeriod';
import Occupied from './Occupied';
import Free from './Free';

export default function ListOfPeriodes({ listOfFrees, date, fishtank }: { listOfFrees: any, date: string, fishtank: string }) {
    return (
        <article>
            {listOfFrees.map((period: any, index: number) => (
                <div key={period.period}>
                    {period.IsOcc ? <Occupied></Occupied> : <Free fishtank={fishtank} periode={`${index + 1}`} date={`${date}`}>{`${getPeriod(index)}`}</Free>}
                </div>
            ))}
        </article>
    )
}