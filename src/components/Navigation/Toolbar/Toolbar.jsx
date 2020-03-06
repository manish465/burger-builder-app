import React from "react";
import styles from "./Toolbar.module.css";

const toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <div>LOGO</div>
            <nav className={styles.nav}>...</nav>
        </header>
    );
};

export default toolbar;
