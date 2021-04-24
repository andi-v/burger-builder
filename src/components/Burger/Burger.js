import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css'

const burger = (props) => {
    console.log('ingredients: ', props.ingredients)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            console.log('nr of ', ingredient, ' = ', props.ingredients[ingredient])
            return [...Array(props.ingredients[ingredient])].map((_, i) => {
                return <BurgerIngredient key={ingredient + i} type={ingredient} />
            }) // [_ , _].map((_ , i) => <BurgerIngredient ... />)
        })
        .reduce((arr, elem) => {
            return arr.concat(elem)
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger