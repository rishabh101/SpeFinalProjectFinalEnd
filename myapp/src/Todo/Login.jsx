import React, {Component} from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import withNavigation from './WithNavigation.jsx';
import AuthenticationService from './AuthenticationService.jsx';
import Form from './Registration.jsx';
import PersonalService from './PersonalServices.jsx';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button,CardColumns,CardHeader,CardFooter} from 'reactstrap';
import HomeandService from './HomeService.jsx';
import SignupForm from './Signup.jsx';
import axios from 'axios';
import { Container } from 'react-dom';
import ConnectingService from './connecting.jsx';

class Login extends Component
{
    
    render()
    {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return(
            
            <div className="TodoApp">
                <Router>
                <HeaderComponent/>
                    <Routes>
                    
                    <Route path="/signup" element={<SignupForm/>}/>
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/" element={ <LoginComponentWithNavigation/>}/>
                        <Route path="*" element={<ErrorComponent />} />
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                    
                    <Route path="/logout" element={<LogoutComponent/>}></Route>
                    <Route path="/personal" element={<PersonalService/>}></Route>
                    <Route path="/homeservice" element={<HomeandService/>}></Route>
                    </Routes>
                   
                   
                    </Router>
                
            </div>
        )
    }
}
class ListTodosCompnent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            todos:
            [{id:1,description:'Learn React',done:false,Date:new Date()},
            {id:2,description:'Become an expert at  React',done:false,Date:new Date()},
            {id:3,description:'Go to anime',done:false,Date:new Date()}]
        }
    }

    render()
    {
        return (
            <div class ="container">
                <h1>List todos</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.todos.map
                            (
                                todo=>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.Date.toString()}</td>
                        </tr>
        )
                        }

                    </tbody>
                </table>

            </div>
        )
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

class WelcomeComponent extends Component
{
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
       <Link to="/personal"> Personal Services</Link>
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
class HeaderComponent extends Component{
    render()
    {
        return (
        
        <header>
            <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="http://www.in28minutes.com" className="navbar-brand">Welcome to RB Website</a></div>
          <ul class ="navbar-nav">
              <li ><Link className="nav-link" to="/welcome">Home</Link></li>
              
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
              <li ><Link className="nav-link" to="/login">Login</Link></li>
              <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
          </ul>
          </nav>
            </header>
        )
    }
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
class LoginComponent extends Component
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
          this.props.navigate(`/welcome`)
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
function InvalidCredentials(props)
{
if(props.hasloginfailed)
return <div>InvalidCredentials</div>
else
return null
}
export default Login