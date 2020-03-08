import React from "react";
import styles from "./SideDrawer.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../HOC/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
    let classes = [styles.SideDrawer, styles.Close];

    if (props.show) {
        classes = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} hideModal={props.close} />
            <div className={classes.join(" ")}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
