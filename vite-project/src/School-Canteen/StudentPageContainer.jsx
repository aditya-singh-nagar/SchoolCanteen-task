import React, { useContext, useEffect } from 'react'
import { DataProvider } from './Allwork'
import StudentPage from './StudentPage'

const StudentPageContainer = () => {
    const {getStudentList,state:{studentList}} = useContext(DataProvider) 
    useEffect(()=>{
        getStudentList()

    },[])
  return (
    <div className='container'>
        <table className="table align-middle text-center  ">
      <thead>
        <tr>
          <th scope="col" style = {{width:"10%"}}>Id</th>
          <th scope="col" style = {{width:"20%"}}>Name</th>
          <th scope="col" style = {{width:"20%"}}>Referral Code</th>
          <th scope="col" style = {{width:"20%"}}>Total Spent</th>
          <th scope="col" style = {{width:"10%"}}> button</th>
          {/* <th scope="col" style = {{}}>photo</th> */}
          {/* <th scope="col" style =  {{}}>Action</th> */}
        </tr>
      </thead>

       <tbody>

    {studentList.map((elm,ind)=> <StudentPage elm = {elm} ind = {ind}/>)}
     
       </tbody>
     
    </table>
    
        </div>
    
  )
}

export default StudentPageContainer