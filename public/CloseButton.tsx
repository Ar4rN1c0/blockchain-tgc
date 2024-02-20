"use-client";

import Image from "next/image";
import styles from "@/app/styles/Form.module.css";
import { useGlobalContext } from "@/app/Context/globalData";

export default function CloseButton () {
    const {setShowForm} = useGlobalContext();
    function handleClose () {
        setShowForm(false);
    }
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <Image onClick={handleClose} className={styles.img} src="/closeButton.svg" width={50} height={50} alt={"Image"}></Image>
    );
}