import React from "react";

import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import noteContext from './noteContext';
import { useNavigate } from 'react-router';
import ConnectingService2 from './connecting2.jsx';
import { useContext } from 'react';

import Subscribe from "./Subscribe";
const OurCard2=(props)=>
{
    let ser2=props.details;
    
    const a=useContext(noteContext);
    const {Credentials,setCredentials}=a;
        const {userId,setUserId}=a;
    let navigate=useNavigate();
    if(ser2.subservice=='Haircut')
    {
    return(
<div>  
  <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333'
    }}
  >
    <CardTitle tag="h5">
      {props.details.subservice}
    </CardTitle>
    <CardText>
     <div>View all {props.details.subservice} services</div>
     <div> Cost is {props.details.cost}</div>

    </CardText>
    <Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
      Add
    </Button>
  </Card>
 </div>
 )
}


if(ser2.subservice=='Waxing')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
>
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}

if(ser2.subservice=='Bleach')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
>
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}
if((ser2.subservice=='Refrigerator'))
{
  return(
    <div><Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333'
    }}
  >
    <CardTitle tag="h5">
      {props.details.subservice}
    </CardTitle>
    <CardText>
     <div>View all {props.details.subservice} services</div>
     <div> Cost is {props.details.cost}</div>

    </CardText>
    <Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
      Add
    </Button>
  </Card>
 </div>
 )
  
}
if((ser2.subservice=='Television'))
{
  return(
    <div>
<Card
>>>>>>> Commit done
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333'
    }}
  >
    <CardTitle tag="h5">
<<<<<<< HEAD
      {props.details}
    </CardTitle>
    <CardText>
      View all {props.details} services
    </CardText>
    <Button onClick={()=>loginClicked2(props.details)} >
=======
      {props.details.subservice}
    </CardTitle>
    <CardText>
     <div>View all {props.details.subservice} services</div>
     <div> Cost is {props.details.cost}</div>

    </CardText>
    <Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
>>>>>>> Commit done
      Add
    </Button>
  </Card>
 </div>
 )

 

  
}
if((ser2.subservice=='Washing'))
{
  return(
<div>
 <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333'
    }}
  >
    <CardTitle tag="h5">
      {props.details.subservice}
    </CardTitle>
    <CardText>
     <div>View all {props.details.subservice} services</div>
     <div> Cost is {props.details.cost}</div>

    </CardText>
    <Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
      Add
    </Button>
  </Card>
 </div>
 )
  }

  if(ser2.subservice=='PestControl')
  {
  return(
<div>  
<Card
  body
  inverse
  style={{
    backgroundColor: '#333',
    borderColor: '#333'
  }}
>
  <CardTitle tag="h5">
    {props.details.subservice}
  </CardTitle>
  <CardText>
   <div>View all {props.details.subservice} services</div>
   <div> Cost is {props.details.cost}</div>

  </CardText>
  <Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
    Add
  </Button>
</Card>
</div>
)
}
if(ser2.subservice=='SofaandCarpetClean')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
>
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}
if(ser2.subservice=='Plumbers')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
>
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}
if(ser2.subservice=='Electrcian')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
>
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}

if(ser2.subservice=='Carpenters')
{
return(
<div>  
<Card
body
inverse
style={{
  backgroundColor: '#333',
  borderColor: '#333'
}}
> cx
<CardTitle tag="h5">
  {props.details.subservice}
</CardTitle>
<CardText>
 <div>View all {props.details.subservice} services</div>
 <div> Cost is {props.details.cost}</div>

</CardText>
<Button onClick={()=>loginClicked2(props.details.id,props.details.subservice)} >
  Add
</Button>
</Card>
</div>
)
}
else{
  return(
    <div></div>
  )
}

function  loginClicked2(Id,subservice)
 {

  let reference=0;

  let s=a.userId;
  console.log(a);
  a.update2(subservice);
  const user={referenceNumber:reference,userId:s,subserviceId:Id}
     fetch("http://localhost:8080/service/subscribe/",{
         method:"POST",
         headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user),

     }).then(()=>{
       console.log("New Subscription Added")
       console.log(userId);
     
        navigate(`/subscribe/${a.credentials.email}`);
      });
 }

}


export  default OurCard2;

