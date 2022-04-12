import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>[
        fetch(`http://localhost:3001/users`)
        .then((res)=> res.json())
        .then((res)=> setUsers(res))
        .catch((err) => console.log(err))
    ],[])
  return (
    <div>
        <table style={{border:"1px solid",margin:"auto"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid"}}>Name</th>
                    <th style={{border:"1px solid"}}>Age</th>
                    <th style={{border:"1px solid"}}>Date Of Birth</th>
                    <th style={{border:"1px solid"}}>State Of Address</th>
                    <th style={{border:"1px solid"}}>Address</th>
                    <th style={{border:"1px solid"}}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((el)=>{
                    return(
                    <tr>
                        <td style={{border:"1px solid"}}>{el.name}</td>
                        <td style={{border:"1px solid"}}>{el.age}</td>
                        <td style={{border:"1px solid"}}>{el.dateOfBirth}</td>
                        <td style={{border:"1px solid"}}>{el.stateOfResidence}</td>
                        <td style={{border:"1px solid"}}>{el.address}</td>
                        <td style={{border:"1px solid"}}>{el.pincode}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Users