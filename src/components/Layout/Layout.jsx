import React from "react";
import Aux from "../../HOC/Auxiliary";
import styles from "./Layout.module.css";

const layout = props => {
    return (
        <Aux>
            <div>Toolbar,sidedrawer,backdrop</div>
            <div className={styles.Content}>{props.children}</div>
        </Aux>
    );
};

export default layout;
