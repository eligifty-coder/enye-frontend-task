import React from 'react'
import classes from './Customer.css'
import Male from '../../../Assests/Images/male.png'
import Female from '../../../Assests/Images/female.png'
import { AiOutlineMail } from 'react-icons/ai'
import { FcCellPhone } from 'react-icons/fc'
const customers = ({ data }) => {
   switch(data.Gender){
      case "Male":
         data.img=Male
         break
         case "Female":
            data.img=Female
            break;
            default:
               data.img=Female
   }
   const transformedData = Object.keys(data)
   let mail= "mailto:"
   let phone="tel:"
   const lastLogin = new Date(data[transformedData[13]])
   const year = lastLogin.getFullYear()
   let months=["January","February", "March","April","May","June","July","August","September","October","November","December"]
   const days = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", ]
   let month = months[lastLogin.getMonth()]
   const date = lastLogin.getDate()
   const day = days[lastLogin.getDay()]
   return (
      <article>
         <div className={classes.Names}>
            <div className={classes.Img}>
               <img src={data[transformedData[15]]} alt=""/>
            </div>
            <h4>{data[transformedData[0]]} {data[transformedData[1]]}</h4>
         </div>
         <div className={classes.EmailPhone}>
            <div className={classes.Phone}>
               <p>Phone Number</p>
               <a href={phone + data[transformedData[9]]}><FcCellPhone />{data[transformedData[9]]}</a>
            </div>
            <div className={ classes.Phone}>
               <p>Email Address</p>
               <a href={mail + data[transformedData[7]]}><AiOutlineMail /> {data[transformedData[7]]}</a>
            </div>
         </div>
         <div className={classes.CardDetail}>
            <div className={classes.Card }>
               <p> Credit Card Number</p>
               <h5>{data[transformedData[5]]}</h5>
            </div>
            <div className={classes.Card }>
               <p> Credit Card Type</p>
               <h5>{data[transformedData[6]]}</h5>
            </div>
         </div>
         <div className={classes.Logins}>
            <div className={classes.Login}>
               <p>Last Login</p>
               <h5>  <span>{day}</span> <span>{date}</span>  <span>{month}</span> <span>{year}</span> </h5>
            </div>
            <div className={classes.Login}>
               <p>Payment Method</p>
               <h5>{data[transformedData[14]]}</h5>
            </div>
         </div>
         <div className={classes.User}>
            <div className={classes.Username}>
               <p>UserName</p>
               <h5>{data[transformedData[12]]}</h5>
            </div>
            <div className={classes.Username}>
               <p>Gender</p>
               <h5>{data[transformedData[2]]}</h5>
            </div>
         </div>
      </article>
   )

}
export default customers