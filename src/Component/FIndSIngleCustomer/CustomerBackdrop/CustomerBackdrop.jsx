import React from 'react'
import classes from './CustomerBackdrop.css'
const CustomerBackdrop = ({ show, clicked, }) => {
   return (
      show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
   )
}
export default CustomerBackdrop