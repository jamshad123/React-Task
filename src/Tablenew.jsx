import React from 'react'
import { useContext } from 'react';
import { useState,useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import { newcontext } from './App';
import axios from 'axios'
import './Table.css';
import { Table } from 'react-bootstrap';

function Tablenew() {
  const [products, setproducts] = useState([]);
  const {array, setarray}=useContext(newcontext)
  const url="https://dummyjson.com/users";
  useEffect(() => {
    axios.get(url).then((res)=> setproducts(res.data.users));
    if (array.length===0)
     {
        setarray(products)
        
    }
},
[products]
)
console.log(array);
    
  return (
    <div>
        <h1 className='text-center'><span>USER DETAILS</span> </h1>
        <Table className='styled-table' striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th> LAST NAME</th>
                    <th>DATE OF BIRTH</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>EMAIL ID</th>
                    <th>PHONE NUMBER</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item)=>{
                    return(
                       
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                    )
                }
                )}
            </tbody>
        </Table>
    </div>
  )
}

export default Tablenew