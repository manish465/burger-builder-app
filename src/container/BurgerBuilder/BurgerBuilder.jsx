import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuiltCTRLs from "../../components/Burger/BuiltCTRLs/BuiltCTRLs";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            mete: 0,
        },
    };
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuiltCTRLs />
            </Aux>
        );
    }
}

export default BurgerBuilder;
