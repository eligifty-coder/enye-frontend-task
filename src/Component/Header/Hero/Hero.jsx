import React from 'react'
import classes from './Hero.css'
import Image from '../../../Assests/Images/img.jpg'
const hero = () => {
   return (
      <section className={classes.Hero}>
         <div className={classes.About}>
            <p>A customer is the most important visitor on our Premises; He's not dependent on Us. We are dependent on him. He is not an interruption inour work. He is the purpose of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity us to do so</p>
            <span>Enye is a play on the Igbo word, Inye, meaning ‘give, offer, provide, providing’. @ Enye, our customers are kings</span>
         </div>
         <div className={classes.Logo}>
            <img src={Image} alt="  "/>
         </div>
      </section>
   )
}
export default hero