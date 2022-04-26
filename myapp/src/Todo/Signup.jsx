import React, {Component} from 'react';
import {Form,FormGroup,Label,Input,FormText,Button} from 'reactstrap';
class SignupForm extends Component
{
    render()
    {

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
      type="textarea"
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
      type="textarea"
      style={{width:500, marginLeft:'500px'}}
    />
  </FormGroup>
  
  <Button>
    Submit
  </Button>
</Form>
</div>
    )
    }
}
export default SignupForm;