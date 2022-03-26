import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddSpeciality extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      _id: '',  
      Name: '', 
    }  
  
    if (props.speciality._id) {  
      this.state = props.speciality  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state._id) {  
  
      pageTitle = <h2>Edit Speciality</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add Speciality</h2>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
        <div>{pageTitle}</div>
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="Name">  
                <Form.Label>Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="Name"  
                  value={this.state.Name}  
                  onChange={this.handleChange}  
                  placeholder="Name" />  
              </Form.Group>  
             
              <Form.Group>  
                <Form.Control type="hidden" name="_id" value={this.state._id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddSpeciality;