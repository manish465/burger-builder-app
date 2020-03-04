import React from "react";
import Aux from "../../../HOC/Auxiliary";

const orderSumm = props => {
    const listItem = Object.keys(props.items).map(igkey => (
        <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
            {props.items[igkey]}
        </li>
    ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Burger with the following ingredients:</p>
            <ul>{listItem}</ul>
            <p>Continue to Checkout!</p>
        </Aux>
    );
};

export default orderSumm;
