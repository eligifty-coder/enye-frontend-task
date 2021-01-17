import React, {Component} from "react"
import classes from './PatientProfileBuilder.css'
import axios from 'axios'
import Customers from '../../Component/Customers/Customers'
import Button from '../../UI/Button/Button'
import Modal from '../../hoc/Modal/Modal'
import CustomerModal from '../../Component/FIndSIngleCustomer/findSIngleCustomer'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {BsSearch} from 'react-icons/bs'
class PatientProfileBuilder extends Component{
   state={
      customers:[],
      loading:false,
      currentPage:1,
      postPerPage:20,
      gender:[],
      modalShow:false,
      customerSHow:false,
      checkGender:"",
      findPerson:[],
      submittedName:null,
   }

   componentDidMount(prevProps){
      if(prevProps !==this.props){
         const fetchCustomers= async ()=>{
            const res = await axios.get(`https://api.enye.tech/v1/challenge/records`)
            this.setState({loading:true})
            if(res){
               this.setState({ customers: [...res.data.records.profiles], loading:false})
            }
         }
         
         fetchCustomers()
      }
   }

   paginate=(pageNumber)=>{
      this.setState({currentPage:pageNumber})
   }
   changeGenderHandler(gender){
      this.setState({checkGender:gender})
      let filteredCustomer= [...this.state.customers]
      let genderCustomer=filteredCustomer.filter(item=>{
         return item.Gender===gender
      })
      this.setState({gender:[...genderCustomer],})
      this.setState({ modalShow: true })
   }
   cancelModal = () => {
      this.setState({ modalShow: false })
   }
   findNameHandler=(names)=>{
      let named= names.toLowerCase()
      this.setState({ findPerson: named })
   }
   submitName=()=>{
      const patientName= this.state.findPerson
      let filteredCustomer = [...this.state.customers]
      let singlePatient = filteredCustomer.find(customer => {
         return customer.FirstName.toLowerCase() === patientName
      })
      this.setState(prevState=>{
         return { submittedName: singlePatient, customerSHow:true, }
         
      })
     
      if (!singlePatient) {
         alert("Patient not found")
      }

   }
   cancelCustomer = () => {
      this.setState({customerSHow: false })
   }
   render(){
      let modalshowed=null
      let showPatient=null
      const findSingleCustomer= [this.state.submittedName]
      if(this.state.submittedName){
         showPatient = <CustomerModal show={this.state.customerSHow} closed={this.cancelCustomer} loading={this.state.loading} customers={[this.state.submittedName]}>
            <div className={classes.positioned}>
               <Customers data={findSingleCustomer} loading={this.state.loading} />
            </div>
         </CustomerModal>
      }
      if(this.state.checkGender){
         modalshowed = <Modal show={this.state.modalShow} closed={this.cancelModal}><Customers data={this.state.gender} loading={this.state.loading} /></Modal>
      }
      const indexOfLastCustomer = this.state.currentPage *this.state.postPerPage
      const indexOfFirstCustomer=  indexOfLastCustomer- this.state.postPerPage
      let currentPage= this.state.customers.slice(indexOfFirstCustomer, indexOfLastCustomer)
      return(
         <div className={classes.PatientProfileBuilder}>
            {showPatient}
            {modalshowed}
            <div className={classes.title}>
               <h1>Authenticated Customers Daily Recorded Transaction Information</h1>
            </div>
            {this.state.loading ? null : <div className={classes.filterSelect}>
               <select
                  className={classes.FilterPage}
                  name="gender"
                  value={this.state.checkGender}
                  onChange={(e) => this.changeGenderHandler(e.target.value)}
               >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
               </select>
               <div className={classes.Inputdiv}>
                  <input type="text"
                     className={classes.inputs}
                     placeholder='Enter Patient first name to search'
                     onChange={(e) => this.findNameHandler(e.target.value)}
                  />
                  <button
                  onClick={this.submitName}
                  ><BsSearch/>
                  </button>
               </div>
            </div>}
            <Customers data={currentPage} loading={this.state.loading}/>
            <div className={classes.Btn}>
               <Button
               postPerPage={this.state.postPerPage}
               totalPage={this.state.customers.length}
               loading={this.state.loading}
               paginate={this.paginate}
               />
               </div>
         </div>
      )
   }
}
export default PatientProfileBuilder