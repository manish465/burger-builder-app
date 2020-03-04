import React from "react";
import styles from "./Modal.module.css";
import Aux from "../../../HOC/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
    <Aux>
        <Backdrop show={props.show} hideModal={props.hideModal} />
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translate(-100vh)",
                opacity: props.show ? "1" : "0",
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default modal;
