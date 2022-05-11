import axios from 'axios';
import React, {Component, useState} from 'react';
import {Form,FormGroup,Label,Input,FormText,Button} from 'reactstrap';
import ConnectingService2 from './connecting2.jsx';
export default function Signup()
{

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[fullname,setfullname]=useState('')
  const[address,setaddress]=useState('')
 
   
  
  const loginClicked=(e)=>
  {
  const user={fullname,email,address,password}
     fetch("http://localhost:8080/user/signup",{
         method:"POST",
         headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user),
     }).then(()=>{
       console.log("New Student Added")

       
      
      

      });
     
  }
      

    return(

    <div>
      <br/>
<Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Enter the email"
      type="email"
      value={email} 
      onChange={(e)=>setemail(e.target.value)}
      style={{width:200, marginLeft:'670px'}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Enter the password"
      type="password"
      value={password} 
      onChange={e=>setpassword(e.target.value)}
      style={{width:200, marginLeft:'670px'}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      FullName
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textfield"
      value={fullname} 
      onChange={e=>setfullname(e.target.value)}
      style={{width:200, marginLeft:'670px'}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Address
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textfield"
      value={address} 
      onChange={e=>setaddress(e.target.value)}
      style={{width:500, marginLeft:'500px'}}
    />
  </FormGroup>
  
  <Button onClick={loginClicked}>
    Submit
  </Button>
</Form>
</div>
    )

    
  
    }
  
