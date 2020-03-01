import React from "react";
import styles from "./BuildCTRL.module.css";

const buildCTRL = props => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.lables}</div>
        <button className={styles.Less}>Less</button>
        <button className={styles.More}>More</button>
    </div>
);

export default buildCTRL;
