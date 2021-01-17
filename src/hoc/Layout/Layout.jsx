import React from 'react'
import Aux from '../Auxillary/Auxillary'
import Header from '../../Component/Header/Header'
const layout =({children})=>{
   return(
      <Aux>
         <Header/>
         <main>
            {children}
         </main>
      </Aux>
   )
}
export default layout