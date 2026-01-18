import React from 'react'

const StudentPage = ({elm:{name,referralCode,totalSpent,},ind}) => {
  return (
    <tr>
      <th scope="row">{ind +1}</th>
      <td>{name}</td>
      <td>{referralCode}</td>
      <td>{totalSpent}</td>
      <td>{'button'}</td>
     
    
      
    </tr>
  )
}

export default StudentPage