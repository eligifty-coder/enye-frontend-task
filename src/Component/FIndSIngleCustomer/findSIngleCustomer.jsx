import React from 'react'
import classes from './findSIngleCustomer'
import Aux from '../../hoc/Auxillary/Auxillary'
import CustomerBackdrop from './CustomerBackdrop/CustomerBackdrop'
function findSIngleCustomer({ show, closed,  children,loading,}) {
   return (
      <Aux>
         <CustomerBackdrop show={show} clicked={closed} />
         <div
            className={classes.Modal}
            style={{
               transform: show ? "translateY(0)" : "translateY(-100vh)",
               opacity: show ? '1' : '0'
            }}
         >
           {children}
        
         </div>
         
      </Aux>
   )
}

export default findSIngleCustomer
