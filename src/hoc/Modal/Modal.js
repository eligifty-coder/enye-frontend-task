import React, {Component} from 'react'
import classes from './Modal.css'
import Aux from '../../hoc/Auxillary/Auxillary'
import Backdrop from '../../UI/Backdrop/Backdrop'
class Modal extends Component{
   shouldComponentUpdate(nextProps,){
      return nextProps.show !== this.props.show
   }
   render(){
      const { children, show,  closed }=this.props
      return (
         <Aux>
            <div
               className={classes.Modal}
               style={{
                  transform: show ? "translateY(0)" : "translateY(-100vh)",
                  opacity: show ? '1' : '0'
               }}
            >
               {children}
            </div>
            <Backdrop show={show} clicked={closed} />
         </Aux>
      )
   }
}
export default Modal