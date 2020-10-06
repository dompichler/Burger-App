 import React from 'react'
 import classes from './Toolbar.css'
 import Logo from '../../components/Burger/Logo/Logo'
 import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
 import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle'
 
 
 const toolbar = (props) => (
   
   <header className={classes.Toolbar}>
     <DrawerToggle clicked={props.drawerToggleClicked}/>
     <div> <Logo/></div>
     <nav className={classes.DesktopOnly}>
       <NavigationItems/>
     </nav>
     
   </header>
 
 );

export default toolbar;