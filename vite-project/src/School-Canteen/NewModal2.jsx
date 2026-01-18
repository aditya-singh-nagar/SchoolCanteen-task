import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataProvider } from './Allwork'

const NewModal2 = () => {
    const {state:{studentForm,showForm},dispatch,addStudent} = useContext(DataProvider) 
    const {name,referralCode,totalSpent} = studentForm
  return (
    <>
   
       {/* <Button variant="primary" onClick={()=> dispatch({type:"show",payload:true})}>
        Launch demo modal
      </Button>  */}
    <Modal show={showForm} onHide ={dispatch({type:"show",payload:false})} className='text-center'>
        <Modal.Header closeButton>
          <Modal.Title>Your order</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' '>

         <form action="" className='form-control'>
            <div>
                <input type="text" name = "name" value={name} 
                onChange={(e)=> dispatch({type:"studentForm" , payload:{[e.target.name]:e.target.value}})}
                />
            </div> 
            <div>
                <input type="text" name = "referralCode" value={referralCode} 
                   onChange={(e)=> dispatch({type:"studentForm" , payload:{[e.target.name]:e.target.value}})}
                />
            </div> 
             <div>
                <input type="text" 
                value={Math.floor(Math.random*10000) } 
                //   onChange={(e)=> dispatch({type:"studentForm" , payload:{[e.target.name]:e.target.value}})}
                />
            </div> 
         </form>
         <div className='myCenter'>
            <button className='btn btn-success'
            onClick={()=> addStudent(studentForm)}

            > Add Student</button>

         </div>
         

           
           
        
        
      
        </Modal.Body>
      
      
      </Modal>
       </>
  )
}

export default NewModal2