import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button,CardColumns,CardLink,CardGroup} from 'reactstrap';

class HomeandService extends Component

{
    render()
    {
        return(
            <div>
    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://us.123rf.com/450wm/geargodz/geargodz1909/geargodz190900242/129911799-electrician-with-screwdriver-repairing-the-air-conditioner-indoors.jpg?ver=6"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Ac service installation,uninstallation
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://www.localramu.com/assets/images/har01.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Appliances Repair
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/10/13103948/shutterstock_512435689.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        CleaningandPest
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
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
class RepairsandPainting extends Component
{

}
class PackersandMovers extends Component
{
    
}
export default HomeandService;