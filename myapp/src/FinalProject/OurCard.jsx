import React,{Component, useState} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import ConnectingService2 from './connecting2';
import OurCard1 from './OurCard1';
import withNavigation from './WithNavigation';
import { useContext } from 'react';
import noteContext from './noteContext';
import NoteState from './NodeState';
 import { Link, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom' ;
const  OurCard=(props) =>
{
    let ser=props.details;
    const a=useContext(noteContext);

   let navigate=useNavigate();
   
    

    if(ser=='Personal')
    {
    return(
        <div>

            

                  
            <Card>
                <CardImg src="https://image.shutterstock.com/image-vector/online-assistant-virtual-technical-support-600w-1431106397.jpg" width="100%"/>
                <CardBody>
                <CardTitle>{props.details}</CardTitle>
               
                <Button onClick={()=>loginClicked2(props.details)}>
                    View personal Services

                </Button>

                
                </CardBody>
            </Card>

        </div>
    )
    }
    if(ser=='Home')
    {
        return(
            <div>
                 <Card>
                <CardImg src="https://previews.123rf.com/images/denphumi/denphumi1406/denphumi140600247/29264335-selection-of-tools-in-the-shape-of-a-house-home-improvement-concept.jpg" width="100%"/>
                <CardBody>
                <CardTitle>{props.details}</CardTitle>
               
                <Button onClick={()=>loginClicked3(props.details)}>
                    View Home Services
                    
                </Button>
                
              
                </CardBody>66
            </Card>

        </div>
        
        )
    }
    else
    {
        return(
            <div></div>
        )
    }
   
 
    function loginClicked2(category)
    {
        
        ConnectingService2.servicesSuccessful(category).then(response=> {
            if(response.data!=null)
            {
            
              console.log(response);
              {
               a.update(response.data);
              }
              navigate('/next');
            
        
             
            }
          });
          }



          function loginClicked3(category)
          {
            ConnectingService2.servicesSuccessful(category).then(response=> {
                if(response.data!=null)
                {
                  
                  console.log(response);
                  a.update(response.data);
            
                navigate('/next');
              <div>
                  
              </div>
                }
              });
              }

              function loginClicked4()
              {
                  console.log("shi hai yaar");
              }
          
    
            }

            
              
    
        

export default OurCard;
