import React from 'react'
import classes from './Navigation.css'
import logo from '../../../Assests/Images/enye.jpeg'
import {NavLink} from 'react-router-dom'
const navigation = ()=>{
   return(
      <nav className={classes.Navigation}>
         <div className={classes.FirstGrid}>
            <div className={classes.Logo}>
               <img src={logo} alt="Logo" />
            </div>
            <ul className={classes.NavLinks}>
               <li><a href="https://twitter.com/enye_tech">twitter</a></li>
               <li><a href="https://www.instagram.com/enye.tech/">Instagram</a></li>
               <li> <a href="https://web.facebook.com/search/top/?q=enye%20tech">Facebook</a></li>
            </ul>
         </div>
         <div className={classes.NextGrid}>
            <NavLink to="/" activeClassName={classes.Isactive}>Home</NavLink>
         </div>
      </nav>
   )
}
export default navigation