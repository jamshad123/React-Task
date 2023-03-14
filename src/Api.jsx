import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Button, Form, Modal, Table} from 'react-bootstrap';
// import {add} from 'react';
import './Api.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { newcontext } from './App';
import {BsFillTrashFill } from "react-icons/bs";
import {GrView} from "react-icons/gr";
import {BiEditAlt} from "react-icons/bi";

// import { useRef } from 'react';




function Api() {
    const [show, setshow] = useState(false);
    const [id, setid] = useState(null);
    const handleClose = ()=> {setshow(false);
    const arr = array.filter((res)=>res.id !== id);
    setarray(arr);
    }

    const handleShow = (e)=>{
        setid(e)
        console.log(e);
        setshow(true);

    }
    const {array,setarray} =useContext(newcontext)
    const url="https://dummyjson.com/users";
    // const subRef = useRef(null);
    const [products, setproducts] = useState([]);
    const [input, setinput] = useState("");
    const [query, setquery] = useState("");
    useEffect(() => {
        axios.get(url).then((res)=> setproducts(res.data.users));
        if (array.length===0) {
            setarray(products)
            
        }
    },[products]
    )
    console.log(array);

    const getinput=(e)=>{
        e.preventDefault();

        setinput(e.target.value)
    }
    console.log(input);
    const filter = array.filter((res)=> res.firstName.toLowerCase().includes(query.toLowerCase()));
    console.log(filter);

    const submit = (e)=>{
        e.preventDefault();
        setquery(input)
        setinput(e.target.value)
    }

    const  heySubmit = (hey)=>{
        setinput(hey.target.value);
    }
    console.log(input);
  return (
    <div>
        <> 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Want to Delete? </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button></Link>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        <Form className='d-flex' onSubmit={submit}>
            <Form.Control
            type="search" Placeholder="search here" className="me-2" aria-label="Search" onChange={heySubmit}/>
            <Button onClick={submit} variant="outline-success">Search</Button>
        </Form>
        {/* <Button className='add'>Add</Button>
        <Button className='add'>Edit</Button>
        <Button className='add'>View</Button> */}





            <h1 className='text-center'>PRODUCT DETAILS </h1>
        <Table striped bordered hover>
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
                {filter.map((item)=>{
                    return(
                        // {item.map((items)=>{
                        //     return(
                           
                    <tr>
                    {/* <td>{BsFillTrashFill}</td> */}
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <Link to={`/details/${item.id}`}><td><Button variant="danger"><GrView/></Button></td></Link>
                    {/* <td><Button variant="danger"><BsFillTrashFill/></Button></td> */}
                    <Link to={`/edit/${item.id}`}><td><Button variant="danger"><BiEditAlt/></Button></td></Link>
                    <Link to={`/${item.id}`}><td><Button variant="danger"><BsFillTrashFill/></Button></td></Link>

            
                    {/* <td>{item.products.map((item)=>{
                        return(<p>{item.title}</p>)})}</td> */}
                    </tr>
                    )
                }
                )}
            </tbody>
        </Table>
        <Link to='/Products'><Button className='there'><b>ADD ITEMS</b></Button></Link>
        
    </div>)

  }

export default Api
// https://dummyjson.com/products
{/* <Link to={`/details/${item.id}`}>
                                <button style={{ color: "white", backgroundColor: "black", borderColor: "#87d0d6" }}>
                                    <h5>
                                        <span>Watch</span>
                                    </h5>
                                </button>
                            </Link> */}