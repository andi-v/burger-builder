import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = ({ isAuthenticated }) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}

        {isAuthenticated
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>
        }
    </ul>
)

export default navigationItems