import React, { useContext, useEffect } from 'react'
import { DataProvider } from './Allwork'
import StudentDetail from './studentDetail'

const StudentDetailContainer = () => {
  useEffect(()=>{
getStudentDetail()
  },[])
  const {state:{studentDetailList},getStudentDetail} = useContext(DataProvider)
  return (
  <div className='container'>
        <table className="table align-middle text-center  ">
      <thead>
        <tr>
          <th scope="col" style = {{width:"10%"}}>Id</th>
          <th scope="col" style = {{width:"40%"}}>Snack Name </th>
          <th scope="col" style = {{width:"20%"}}>Quantity</th>
          <th scope="col" style = {{width:"20%"}}>Total Amount</th>
          {/* <th scope="col" style = {{width:"10%"}}> button</th> */}
          {/* <th scope="col" style = {{}}>photo</th> */}
          {/* <th scope="col" style =  {{}}>Action</th> */}
        </tr>
      </thead>

       <tbody>

    {studentDetailList.map((elm,ind)=> <StudentDetail elm = {elm} ind = {ind}/>)}
     
       </tbody>
     
    </table>
    
        </div>
  )
}

export default StudentDetailContainer