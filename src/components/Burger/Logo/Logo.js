import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../../assets/Images/Bob’s_Burgers_Logo.png'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt={"Bobs Burger"}/>
  </div>



);

export default logo;