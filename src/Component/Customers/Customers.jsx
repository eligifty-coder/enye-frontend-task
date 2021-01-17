import React from 'react'
import classes from './Customers.css'
import Customer from './Customer/Customer'
import Aux from '../../hoc/Auxillary/Auxillary'
const customers =({data, loading})=>{
   if(loading){
      return <h2>Loading...</h2>
   }
   let customer = data.map((customer, index) => (
      <Aux key={index}>
         <Customer data={customer} />
      </Aux>)
   )
   
   return (
      <div className={classes.Customers}>
         {customer}
      </div>
   )
}
export default customers