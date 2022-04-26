import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button,CardColumns,CardLink,CardGroup} from 'reactstrap';
class PersonalService extends Component
{
    render()
    {
        return(
        <div>
          <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Salon for Women
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
      Services      </CardSubtitle>
      <CardText>
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
      Waxing
    </CardTitle>
    <CardText>
      Click on Add to add the service
    </CardText>
    <Button onClick="">
      ADD
    </Button>
  </Card>
  <Card
    body
    color="primary"
    inverse
  >
    <CardTitle tag="h5">
      HairCut
    </CardTitle>
    <CardText>
    Click on Add to add the service
    </CardText>
    <Button onClick="">
      ADD
    </Button>
  </Card>
  <Card
    body
    color="success"
    inverse
  >
    <CardTitle tag="h5">
      Bleaching
    </CardTitle>
    <CardText>
    Click on Add to add the service
    </CardText>
    <Button onClick="">
      ADD
    </Button>
  </Card>
  
  
 </div>

             </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://portenoire.com/wp-content/uploads/2019/06/2019_06_12-Tips-for-Marketing-a-Salon-to-Men-and-Getting-More-Male-Clients-1200x628-1080x628.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Salon for Men
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
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
      Hair Cut for Men and kid
    </CardTitle>
    <CardText>
    Click on Add to add the service
    </CardText>
    <Button>
      ADD
    </Button>
  </Card>
  <Card
    body
    color="primary"
    inverse
  >
    <CardTitle tag="h5">
    Face care
    </CardTitle>
    <CardText>
    Click on Add to add the service
    </CardText>
    <Button>
      ADD
    </Button>
  </Card>
  <Card
    body
    color="success"
    inverse
  >
    <CardTitle tag="h5">
      Hair Color
    </CardTitle>
    <CardText>
    Click on Add to add the service
    </CardText>
    <Button>
      ADD
    </Button>
  </Card>
  
  
 
</div>
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://envato-shoebox-0.imgix.net/41fc/a589-669a-4dc3-966b-460c428b8bd8/300_E39A1752.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=7c3b1df15f476ecdf20d7a6911113c6f"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Massage for Men
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
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
      Special Title Treatment
    </CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>
      Button
    </Button>
  </Card>
  <Card
    body
    color="primary"
    inverse
  >
    <CardTitle tag="h5">
      Special Title Treatment
    </CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>
      Button
    </Button>
  </Card>
  <Card
    body
    color="success"
    inverse
  >
    <CardTitle tag="h5">
      Special Title Treatment
    </CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>
      Button
    </Button>
  </Card>
  
 
  
</div>
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</CardGroup>
        </div>
        
           
  )
  }
}
class WelcomingComponentforMen extends Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to the booking for salon for Men.Kindly select the services you want  </h1>
         <hr/>
        </div>
    )
  }
}

  
  class ExampleApp extends Component {
    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    render() {
      return (
        <div>
          <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            
            <span>Bleaching</span>
          
          </label>
          </div>
          <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Waxing</span>
          </label>
          </div>
          <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Pedicure and Manicure</span>
          </label>
          </div>
          <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Cleanup and facials</span>
          </label>
          </div>
          <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Haircut</span>
          </label>
          </div>
          <button >
            Submit
          </button>
        </div>    
      ) 
    }
  }
  const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
class SalonComponentforMen extends Component
{
    render()
    {
        return(
        
         <div>
           <WelcomingComponentforMen/>
           <ExampleApp1/>
         </div>
        )
    }
}
class ExampleApp1 extends Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <div>
        <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          
          <span>Bleaching</span>
        
        </label>
        </div>
        <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Waxing</span>
        </label>
        </div>
        <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Pedicure and Manicure</span>
        </label>
        </div>
        <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Cleanup and facials</span>
        </label>
        </div>
        <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Haircut</span>
        </label>
        </div>
        <button >
          Submit
        </button>
      </div>    
    ) 
  }
}


class SpaforWomen extends Component
{
    render()
    {
        return(
        
         <div></div>
        )
    }
}

export  default PersonalService

