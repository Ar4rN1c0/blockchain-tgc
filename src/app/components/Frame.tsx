
"use client";

import styles from "@/app/styles/Frame.module.css";
import { animated, useSpring } from "@react-spring/web";


export default function Frame () {

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
        <animated.div style={{...springs}} className={styles.frame}>
            <article className="formArticle">

            </article>
        </animated.div>
    );
}