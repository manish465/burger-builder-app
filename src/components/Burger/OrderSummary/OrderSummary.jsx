import React from "react";
import Aux from "../../../HOC/Auxiliary";
import Button from "../../UI/Button/Button";

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
            <Button btnType="Danger" click={props.cancel}>
                CANCEL
            </Button>
            <Button btnType="Success" click={props.continue}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSumm;
