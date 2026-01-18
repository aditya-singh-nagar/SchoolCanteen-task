import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataProvider } from './Allwork';

const NewModal = () => { 

    const {state:{showForm,snackDetail,name,quantity},dispatch,handleClose} = useContext(DataProvider) 
    const {foodname,foodprice,foodimage} = snackDetail
  return (
    <>
        {/* <Button variant="primary" onClick={()=> dispatch({type:"show",payload:true})}>
        Launch demo modal
      </Button> */}

      <Modal show={showForm} onHide ={handleClose} className='text-center'>
        <Modal.Header closeButton>
          <Modal.Title>Your order</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' '>

          <div className="text-center my-3">
            <img src={foodimage} alt="" style={{height:"150px" , width:"200px"}}/>
          </div>
           
           <div className=" myCenter "> <h4>Food Name : </h4> <h3>{foodname}</h3>  </div>
           <div className=" myCenter"> <h4>Food price : </h4> <h4>{foodprice} rs</h4></div>
           <div className=" myCenter align-items-center" >  <h4>Food Quantity : </h4>  <input type="number" max={5} maxLength={1}  style={{height:"26px" ,width:"60px"}} 
           onChange={(e)=> dispatch({type : "quantityInp" ,payload:e.target.value})}
           />  </div>
             <div className=" myCenter align-items-center" >  <h4>Student Name : </h4>  <input type="text" max={15} style={{height:"26px" ,width:"120px"}}
             onChange={(e)=> dispatch({type : "nameInp" ,payload:e.target.value})}
             />  </div>
           <div className="myCenter align-items-center">  <h4>Total Price : </h4>  <h5>${foodprice*quantity }</h5></div> 
            <div className="myCenter align-items-center"> <button className='btn btn-success'
            onClick={()=> dispatch({type:"searchName" , payload:name})}
            > Place order</button></div> 

           
           
        
        
      
        </Modal.Body>
      
      
      </Modal>
    </>
  )
}

export default NewModal