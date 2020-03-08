import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        isBackdropActive: true,
    };

    closeBackDrop = () => {
        this.setState({ isBackdropActive: false });
    };
    openBackDrop = () => {
        this.setState({ isBackdropActive: true });
    };

    render() {
        return (
            <Aux>
                <Toolbar click={this.openBackDrop} />
                <SideDrawer
                    show={this.state.isBackdropActive}
                    close={this.closeBackDrop}
                />
                <div className={styles.Content}>{this.props.children}</div>
            </Aux>
        );
    }
}

export default Layout;
