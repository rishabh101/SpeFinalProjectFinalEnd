
import React, {Component} from 'react'

import Form from './Registration.jsx';

import { useEffect} from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import withNavigation from './WithNavigation.jsx';
import AuthenticationService from './AuthenticationService.jsx';


import PersonalService from './PersonalServices.jsx';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button,CardColumns,CardHeader,CardFooter} from 'reactstrap';
import HomeandService from './HomeService.jsx';
import Signup from './Signup.jsx';
import axios from 'axios';
import { Container } from 'react-dom';
import ConnectingService from './connecting.jsx';
import ConnectingService2 from "./connecting2.jsx";
import OurCard from './OurCard.jsx';
import { useState } from 'react';
import OurCard1 from './OurCard1.jsx';
import NoteState from './NodeState.jsx';
import NextCard from './NextCard.jsx';
import NoteState2 from './NodeState2.jsx';
import NextCard2 from './NextCard2.jsx';

import withParams from './withParams.jsx';
import { useNavigate } from 'react-router';
import noteContext from './noteContext.jsx';
import { useContext } from 'react';
import Subscribe from './Subscribe.jsx';

class Login extends Component
{
    
    render()
    {

        const LoginComponentWithNavigation = withNavigation(LoginComponent);

       /* const LoginComponentWithNavigation = withNavigation(LoginComponent);*/
        const WelcomeComponentWithParams = withParams(Welcome1Component);
        
       const NextCardwithParams=withParams(NextCard);
       const NextCard2withParams=withParams(NextCard2);
       const SubscribewithParams=withParams(Subscribe);
      

       
        return(
            
            <div className="TodoApp">
              <NoteState>
            
                <Router>
                <HeaderComponent/>
                    <Routes>
                    
                    <Route path="/signup" element={<Signup/>}/>

                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/" element={ <LoginComponentWithNavigation/>}/>
                        <Route path="*" element={<ErrorComponent />} />
                    
                    
                  
                    
                        <Route path="/" element={ <LoginComponent/>}/>
                        <Route path="*" element={<ErrorComponent />} />
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                    
                    <Route path="/welcome1/:email" element={<WelcomeComponentWithParams />} />

                    <Route path="/logout" element={<LogoutComponent/>}></Route>
                    <Route path="/personal" element={<PersonalService/>}></Route>
                    <Route path="/homeservice" element={<HomeandService/>}></Route>
                    <Route path="/welcome2" element={<OurCard1/>}></Route>

                    <Route path="/next" element={<NextCard/>}></Route>
                    <Route path="/next2" element={<NextCard2/>}></Route>

                    <Route path="/next/:email" element={<NextCardwithParams/>}></Route>
                    <Route path="/next2/:email" element={<NextCard2withParams/>}></Route>
                    <Route path="/subscribe/:email" element={<SubscribewithParams/>}></Route>
                    <Route path="/orders" element={<Orders1/>}></Route>

                    </Routes>
                   
                   
                    </Router>
                    
                    </NoteState>

                
            </div>
        )
    }
}
 




const Welcome1Component =(props) =>{


 
  const [categories,setCategories] = useState([]);
 
    const [images,setImages]=useState(
      [{src :"https://image.shutterstock.com/image-vector/online-assistant-virtual-technical-support-600w-1431106397.jpg"},{src1:"https://image.shutterstock.com/image-vector/online-assistant-virtual-technical-support-600w-1431106397.jpg"}]
    )

    return(
     
    <div>

      <h1>Hello User ,welcome to our website ,happy to help you</h1>

      <div>Welcome {props.params.email}</div>

      <Button onClick={loginClicked1}>
        View all Categories of the services we provide
      </Button>
      <div>
      { 
      categories.length>0 ?categories.map((item) => <OurCard details={item} />): "No Categories"
    }
    </div>
    </div>
    )
     function loginClicked1()
    {
    ConnectingService2.successful().then(response=> {
      if(response.data!=null)
      {
        
        console.log(response);
      setCategories(response.data);
          
    
      }
    });
    }
}

class SignupComponent extends Component{
render()
{
    return(
        <div>


        </div>
    )
}
}


const Orders=(props)=>
{
  
  
    
    return(
      <div>
        
        

      </div>
    )
}
const Orders1=(props)=>
{
  const a =useContext(noteContext);
  
  const {orders,setOrders}=a;
 
  return(
    
    <div>
      <h1>The past orders are:-\</h1>
      Category is {orders}
      

    </div>
  )
}



class WelcomeComponent extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      Servicename:""
    }
  }

  loginClicked1()
  {
  ConnectingService2.successful().then(response=> {
    if(response.data!=null)
    {
      alert("successful");
    }
  });
  }
  
    render()
        {
            return( 
                <CardColumns>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://image.shutterstock.com/image-vector/online-assistant-virtual-technical-support-600w-1431106397.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
       <Button onClick={this.loginClicked1}>PersonalServices</Button> 
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        
          <div> Salon for Women</div>
          <div>
          Salon for Men
          </div>
          <div>
          Massage for Men
          </div>
        
      </CardSubtitle>
      <CardText>
       
      </CardText>
     
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://previews.123rf.com/images/denphumi/denphumi1406/denphumi140600247/29264335-selection-of-tools-in-the-shape-of-a-house-home-improvement-concept.jpg"
      top
      width="100%"
    />
  </Card>
  <Card>
    <CardBody>
      <CardTitle tag="h5">
      <Link to="/homeservice">HomeServices</Link>  
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
         <div> AC Service,Installation,uninstallation</div>
          <div>
          Appliances Repair
          </div>
          <div>
          Cleaning and Pest
          </div>
          <div>
          Repairs and Painting
          </div>
      </CardSubtitle>
      <CardText>
       
      </CardText>
      
    </CardBody>
  </Card>
  
 
  

    
</CardColumns>
               )
            
               }
    
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}


const  HeaderComponent=()=>{
   

  const context =useContext(noteContext);
  const a =useContext(noteContext);
  const {userId,setUserid}=context;
 
  
  
  function clicked()
  {
  ConnectingService2.getOrders(userId).then(response=>
    {
      if(response.data!=null)
      {
        console.log(response.data);
        {

            a.update5(response.data[0]);
        }
      }
    })
  }


        return (
        
        <header>
            <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="http://www.in28minutes.com" className="navbar-brand">Welcome to RB Website</a></div>

          <ul class ="navbar-nav">
              <li ><Link className="nav-link" to="/welcome">Home</Link></li>
          </ul>
          <ul className ="navbar-nav">
              
              <li ><Link className="nav-link" to="/orders"><Button onClick={clicked}>
              Orders</Button></Link></li>

              
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
              <li ><Link className="nav-link" to="/login">Login</Link></li>
              <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
          </ul>
          </nav>
            </header>
        )

    }

    


class FooterComponent extends Component
{
    render()
    {
        return (
          <div>
          <Card>
            <CardHeader>
              Header
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter>
              Footer
            </CardFooter>
          </Card>
          <Card>
            <CardHeader tag="h3">
              Featured
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter className="text-muted">
              Footer
            </CardFooter>
          </Card>
        </div>
        )
    }
}
class LogoutComponent extends Component{
    render()
    {
        return <div>
            <h1>You are logged out</h1>
            <div className="container">
                Thank you for using this application
            </div>
        </div>
    }
}

class LoginComponent1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            
                email:"rishabh",
                password:"",
                hasLoginFailed:false,
                showSuccessfulMessage:false,
            }
              
      this.handleChange=this.handleChange.bind(this);
      this.loginClicked=this.loginClicked.bind(this);
      
    }
    handleChange(event)
    {
        
          this.setState(
          {
              [event.target.name]:event.target.value
          }
          )
    }
    loginClicked()
    {
      
     if(this.state.email!='' && this.state.password!='')
     {
      ConnectingService.executeHelloWorldService(this.state.email,this.state.password).then(response => console.log(response));
          console.log('Successful')
          AuthenticationService.registerSuccessfulLogin(this.state.email,this.state.password);
          this.props.navigate(`/welcome1`)
          this.setState({showSuccessfulMessage :true})
          this.setState({hasLoginFailed:false})
     }
     else{
         console.log('failed');
        this.setState({showSuccessfulMessage :false})
        this.setState({hasLoginFailed:true})
     }

    }
    retreiveLogin()
    {
     ConnectingService.executeHelloWorldService().then(response => this.loginClicked(response));
    }
    render()
    {
        return(
            <div>
                
                <InvalidCredentials hasloginfailed={this.state.hasLoginFailed}/>
                <br/>
                <div>
            Email:< input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <br/>
            <div>
            Password:<input type="password" name="password"  value={this.state.password} onChange={this.handleChange}/>
            </div>
            <br/>
            <div>
             <button onClick ={this.loginClicked}>Login</button>
             </div>
            </div>
        )
    }
}
const LoginComponent=()=>
{

  const [Credentials,setCredentials]=useState({email:"",password:""})
  const a=useContext(noteContext);
      let  hasLoginFailed=false;
      let showSuccessfulMessage=false;
            
      let navigate=useNavigate();
      
      
    
   const handleChange=(event)=>
    {
        
          
             setCredentials({...Credentials,[event.target.name]:event.target.value});
        
          
    }
   function loginClicked()
    {
     
     if(Credentials.email!='' && Credentials.password!='')
     {
      ConnectingService.executeHelloWorldService(Credentials.email,Credentials.password).then(response =>{
         if(response.data!=null)
         {
          a.update4(response.data);
        console.log(response.data);
         }
        });
          console.log('Successful')
          AuthenticationService.registerSuccessfulLogin(Credentials.email,Credentials.password);
          a.update3(Credentials);
          navigate(`/welcome1/${Credentials.email}`)
          showSuccessfulMessage =true;
          hasLoginFailed=false;
     }
     else{
         console.log('failed');
        showSuccessfulMessage=false
        hasLoginFailed=true
     }

    }
   function retreiveLogin()
    {
     ConnectingService.executeHelloWorldService().then(response => this.loginClicked(response));
    }
   
        return(
            <div>
                
                <InvalidCredentials hasloginfailed={hasLoginFailed}/>
                <br/>
                <div>
            Email:< input type="email" name="email" value={Credentials.email} onChange={handleChange}/>
            </div>
            <br/>
            <div>
            Password:<input type="password" name="password"  value={Credentials.password} onChange={handleChange}/>
            </div>
            <br/>
            <div>
             <button onClick ={loginClicked}>Login</button>
             </div>
            </div>
        )
    
}
function InvalidCredentials(props)
{
if(props.hasloginfailed)
return <div>InvalidCredentials</div>
else
return null
}
export default Login
