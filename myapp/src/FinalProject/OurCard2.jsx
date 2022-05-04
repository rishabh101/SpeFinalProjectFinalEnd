import React from "react";

import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import noteContext from './noteContext';
import { useNavigate } from 'react-router';
import ConnectingService2 from './connecting2.jsx';
import { useContext } from 'react';
const OurCard2=(props)=>
{
    let ser1=props.details;
    
    const a=useContext(noteContext);

    let navigate=useNavigate();
    if(ser1=='Haircut')
    {
    return(
<div>  <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333'
    }}
  >
    <CardTitle tag="h5">
      {props.details}
    </CardTitle>
    <CardText>
      View all {props.details} services
    </CardText>
    <Button onClick={()=>loginClicked2(props.details)} >
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

 loginClicked2(subservice)
 {

 }
}
export default OurCard2;