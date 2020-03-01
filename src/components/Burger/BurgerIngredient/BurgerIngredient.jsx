import React from "react";
import Ingrediant from "./BurgerIngredient.module.css";

const burgerIngredient = props => {
    let ingrediant = null;

    switch (props.type) {
        case "bread-bottom":
            ingrediant = <div className={Ingrediant.BreadBottom}></div>;
            break;
        case "bread-top":
            ingrediant = (
                <div className={Ingrediant.BreadTop}>
                    <div className={Ingrediant.Seeds1}></div>
                    <div className={Ingrediant.Seeds2}></div>
                </div>
            );
            break;
        case "meat":
            ingrediant = <div className={Ingrediant.Meat}></div>;
            break;
        case "cheese":
            ingrediant = <div className={Ingrediant.Cheese}></div>;
            break;
        case "salad":
            ingrediant = <div className={Ingrediant.Salad}></div>;
            break;
        case "bacon":
            ingrediant = <div className={Ingrediant.Bacon}></div>;
            break;
        default:
            ingrediant = null;
    }
    return ingrediant;
};

export default burgerIngredient;
