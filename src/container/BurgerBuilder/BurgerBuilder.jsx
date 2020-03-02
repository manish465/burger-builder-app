import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuiltCTRLs from "../../components/Burger/BuiltCTRLs/BuiltCTRLs";

const INGREDIENT_PRICE = {
    salad: 0.7,
    bacon: 0.5,
    meat: 1.0,
    cheese: 0.3,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    };

    addIngredients = type => {
        let count = this.state.ingredients[type];
        const newCount = count + 1;
        const newIngredient = {
            ...this.state.ingredients,
        };
        newIngredient[type] = newCount;
        const ingredientsPrice = INGREDIENT_PRICE[type];
        const price = this.state.totalPrice;
        const newPrice = ingredientsPrice + price;
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };

    removeIngredients = type => {
        let count = this.state.ingredients[type];
        const newCount = count - 1;
        const newIngredient = {
            ...this.state.ingredients,
        };
        newIngredient[type] = newCount;
        const ingredientsPrice = INGREDIENT_PRICE[type];
        const price = this.state.totalPrice;
        const newPrice = ingredientsPrice - price;
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };

    render() {
        const disabledButton = { ...this.state.ingredients };
        for (let key in disabledButton) {
            disabledButton[key] = disabledButton[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuiltCTRLs
                    addItem={this.addIngredients}
                    removeItem={this.removeIngredients}
                    disabledButton={disabledButton}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
