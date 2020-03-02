import React from "react";
import styles from "./BuildCTRL.module.css";

const buildCTRL = props => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.lables}</div>
        <button
            className={styles.Less}
            onClick={props.removed}
            disabled={props.disabled}
        >
            Less
        </button>
        <button className={styles.More} onClick={props.added}>
            More
        </button>
    </div>
);

export default buildCTRL;
