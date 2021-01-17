import React from "react"
import classes from './Button.css'
const Button = ({ postPerPage, totalPage ,loading, paginate })=>{
   let PageNumber=[]

      for(let i=1; i<=Math.ceil(totalPage / postPerPage);i++){
         PageNumber.push(i)
      }
      let show= PageNumber.map(number=>{
         return <button
          className={classes.Btn}
          onClick={()=>paginate(number)}
         key={number}>{number}</button>
      })
      if(loading){
         show = null
      }
   return(
      <div className={classes.Btns}> 
         {show}
      </div>
   )
}
 export default Button