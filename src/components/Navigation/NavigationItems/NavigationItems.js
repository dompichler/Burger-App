import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = () => (
<ul className={classes.NavigationItems}>
  <NavigationItem text="Burger Builder"/>
  <NavigationItem text="Check Out"/>
</ul>
);

export default navigationItems;