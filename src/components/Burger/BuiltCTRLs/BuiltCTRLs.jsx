import React from "react";
import styles from "./BuiltCTRLs.module.css";
import BuildCTRL from "./BuildCTRL/BuildCTRL";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const builtCTRLs = props => (
    <div className={styles.BuildControl}>
        <p>
            Current Price: <strong>${props.price.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl => (
            <BuildCTRL
                key={ctrl.label}
                lables={ctrl.label}
                added={() => props.addItem(ctrl.type)}
                removed={() => props.removeItem(ctrl.type)}
                disabled={props.disabledButton[ctrl.type]}
            />
        ))}
        <button
            className={styles.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.purchase}
        >
            ORDER NOW
        </button>
    </div>
);

export default builtCTRLs;
