/* eslint-disable react/react-in-jsx-scope */
"use-client";

import { configType } from "../types/types";
import { useState } from "react";
import styles from "@/app/styles/Form.module.css";
import { useGlobalContext } from "../Context/globalData";
import CloseButton from "../../../public/CloseButton";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import config from "../../../config.json" assert {type: "json"};
import { animated, useSpring } from "@react-spring/web";

const settings = config as configType;

export default function Form () {
    const { data, setData } = useGlobalContext();
    const [loader, setLoader] = useState<boolean>(false);
    const router = useRouter();

    function handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
        const prevData = {...data};
        prevData.name = e.target.value;
        setData(prevData);
    }

    function handleEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
        const prevData = {...data};
        prevData.email = e.target.value;
        setData(prevData);
    }

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoader(true);
        console.log(data)
        fetch(`${settings.url}/api/post/checkout`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: "cors"
        }).then(res => res.json())
            .then(res => router.push(res.qr))
            .catch(err => console.error(err));
    }

    const springs = useSpring({
        from: {
            transform: "scale(0)",
            opacity: 0,
            backgroundColor: "transparent"
        },
        to: [{
            transform: "scale(1)",
            opacity: 1,
            backgroundColor: "transparent"
        }, {
            backgroundColor: "rgba(0, 0, 0, 0.339)"
        }]
    });


    return (
        <animated.div style={{...springs}} className={styles.form}>
            <article className={styles.formArticle}>
                <CloseButton></CloseButton>
                <form className={styles.formCont} onSubmit={handleSubmit} action="" method="post">
                    <div className={styles.parrCont}>
                        <p className={styles.parr}>You selected the Fishtank {data.fishtank === 1 ? "Marie Curie" : "Leonardo Da Vinci"}. Enter your data to make the transaction</p>
                    </div>
                    <div className={styles.inputCont}>
                        <input onChange={handleNameChange}  name="name"  type="text"  value={data.name}  placeholder="Introduce your name:  "/>
                        <input onChange={handleEmailChange} name="email" type="email" value={data.email} placeholder="Introduce your email: "/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </article>
            {loader && <Loader />}
        </animated.div>
    );
}