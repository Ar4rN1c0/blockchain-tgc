import Header from "@/app/components/Header";
import styles from "@/app/reserve/[id]/IDReserve.module.css";
import Free from "@/app/components/Free";
import fetchFrees from "@/app/functions/fetchFress";
import FormCont from "@/app/components/FormCont";
import processApiResponse from "@/app/functions/processResponse";
import Booked from "@/app/components/Booked";
import { Params } from "@/app/types/types";
import FrameCont from "@/app/components/FrameCont";



const today        = new Date();
const tomorrow     = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const pastTomorrow = new Date(tomorrow);
pastTomorrow.setDate(tomorrow.getDate() + 1);

export default async function Reserve({ params }: { params: Params }) {


    let freeToday    = await fetchFrees(today.toLocaleDateString("en-GB"), params.id); 
    let freeTomorrow = await fetchFrees(tomorrow.toLocaleDateString("en-GB"), params.id); 
    let freePast     = await fetchFrees(pastTomorrow.toLocaleDateString("en-GB"), params.id); 

    freeToday    = processApiResponse(freeToday);
    freeTomorrow = processApiResponse(freeTomorrow);
    freePast     = processApiResponse(freePast);

    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <section className={styles.listSection}>
                    <h2>{today.toLocaleDateString("en-GB")}</h2>
                    {freeToday.map((item: { isOcc: boolean; period: number; }, index: number) => (
                        item.isOcc ? <Booked key={index}></Booked> : <Free date={today.toLocaleDateString("en-GB")} key={index} period={item.period}></Free>
                    ))}
                </section>
                <section className={styles.listSection}>
                    <h2>{tomorrow.toLocaleDateString("en-GB")}</h2>
                    {freeTomorrow.map((item: { isOcc: boolean; period: number; }, index: number) => (
                        item.isOcc ? <Booked key={index}></Booked> : <Free date={tomorrow.toLocaleDateString("en-GB")} key={index} period={item.period}></Free>
                    ))}
                </section>
                <section className={styles.listSection}>
                    <h2>{pastTomorrow.toLocaleDateString("en-GB")}</h2>
                    {freePast.map((item: { isOcc: boolean; period: number; }, index: number) => (
                        item.isOcc ? <Booked key={index}></Booked> : <Free date={pastTomorrow.toLocaleDateString("en-GB")} key={index} period={item.period}></Free>
                    ))}
                </section>
                <section className={styles.form}>
                    <FormCont></FormCont>
                </section>
                <section className={styles.form}>
                    <FrameCont></FrameCont>
                </section>
            </main>
        </>
    );
}