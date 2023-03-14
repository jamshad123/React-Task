import React from 'react'
import { useContext,useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { newcontext } from './App';
import {Link} from 'react-router-dom'
import './Login.css';



function LoginPage() {
    const {array, setarray}=useContext(newcontext)
  const {id} =useParams()
  console.log(id);
  console.log(array);

  const [filter] = array.filter((res => res.id == id));
  console.log(filter);

  return (
  // <div className='background'>
    <div className='wrapper bg-light d-flex align-items-center justify-content-center w-100'>
 <div className='Login'>
   <h1 className='mb-3'>Login Form</h1>
   <form className='needs-validation'>
   <div className='form-group was-validated mb-2'>
     <label htmlFor='text' className='form-label'>Username</label>
     <input type="text" className='form-control' required></input>
     <div className='invalid-feedback'>Please enter your Username</div>
   </div>

  

     <div className='form-group was-validated mb-2'>
     <label htmlFor='password' className='form-label'>Password</label>
     <input type="password" className='form-control' required></input>
     <div className='invalid-feedback'>Please enter your Password</div>
     </div>

     <div className='form-group was-validated mb-2'>
     <label htmlFor='password' className='form-label'>Confirm Password</label>
     <input type="password" className='form-control' required></input>
     <div className='invalid-feedback'>Please confirm your Password</div>
     </div>

     <div className='form-group form-check mb-2'>
     <label htmlFor='check' className='form-check-label'>Remember me</label>
     <input type="checkbox" className='form-check-input'></input>
     </div>

     <Link to='/Tablenew'><Button type="submit" className='btn btn-success w-100 mt-2'>SIGN IN</Button></Link>
     </form>
       





 </div>
 </div>
//  </div>
  )
}
export default LoginPage
