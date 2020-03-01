import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 3,
            mete: 2,
        },
    };
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
