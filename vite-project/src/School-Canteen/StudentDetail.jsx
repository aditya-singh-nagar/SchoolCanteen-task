import React from 'react'

const StudentDetail = ({elm:{snackName,snackQuantity,totalAmount},ind}) => {
  return (
      <tr>
      <th scope="row">{ind +1}</th>
      <td>{snackName}</td>
      <td>{snackQuantity}</td>
      <td>{totalAmount}</td>
      
     
    
      
    </tr>
  )
}

export default StudentDetail