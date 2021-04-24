import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a fctional comp, doesn't have to be a class
    componentDidUpdate() {
        console.log('[OrderSummary] Will Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingred => {
                return (
                    <li key={ingred}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {ingred}
                        </span>
                        : {this.props.ingredients[ingred]}
                    </li>
                )
            })

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>

                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>

                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>

                <Button btnType="Success" clicked={this.props.purchaseContinued}>
                    CONTINUE
                </Button>
            </>
        )
    }
}

export default OrderSummary