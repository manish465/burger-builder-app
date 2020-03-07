import React from "react";
import Aux from "../../HOC/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div className={styles.Content}>{props.children}</div>
        </Aux>
    );
};

export default layout;
