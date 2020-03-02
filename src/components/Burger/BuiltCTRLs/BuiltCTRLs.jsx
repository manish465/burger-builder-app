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
        {controls.map(ctrl => (
            <BuildCTRL
                key={ctrl.label}
                lables={ctrl.label}
                added={() => props.addItem(ctrl.type)}
                removed={() => props.removeItem(ctrl.type)}
                disabled={props.disabledButton[ctrl.type]}
            />
        ))}
    </div>
);

export default builtCTRLs;
