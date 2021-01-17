import React from'react'
import classes from './Header.css'
import Navigation from './Navigation/Navigation'
import Hero from './Hero/Hero'
const header =()=>{
   return(
      <section className={classes.Header}>
         <Navigation/>
         <Hero/>
      </section>
   )
}
export default header