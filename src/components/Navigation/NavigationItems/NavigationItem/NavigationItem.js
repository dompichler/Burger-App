import React from 'react'
import classes from './NavigationItem.css'

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href="/" alt="Hello">{props.text}</a>
  </li>
);

export default navigationItem;