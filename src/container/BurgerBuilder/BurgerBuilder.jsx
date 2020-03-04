import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuiltCTRLs from "../../components/Burger/BuiltCTRLs/BuiltCTRLs";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        purchaseable: false,
        purchaseing: false,
    };

    updatePurchaseable(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igkey => ingredients[igkey])
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

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
        this.updatePurchaseable(newIngredient);
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
        const newPrice = price - ingredientsPrice;
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
        this.updatePurchaseable(newIngredient);
    };

    purchaseHandler = () => {
        this.setState({ purchaseing: true });
    };

    render() {
        const disabledButton = { ...this.state.ingredients };
        for (let key in disabledButton) {
            disabledButton[key] = disabledButton[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchaseing}>
                    <OrderSummary items={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuiltCTRLs
                    addItem={this.addIngredients}
                    removeItem={this.removeIngredients}
                    disabledButton={disabledButton}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchase={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
