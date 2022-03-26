import React, { Component } from 'react';  
import { Container, Button } from 'react-bootstrap';  
import axios from 'axios';

import SpecialityList from './GetSpeciality';  
import AddSpeciality from './AddSpeciality';  


const apiUrl = process.env.REACT_APP_API_ENDPOINT + 'specialities';
  
class SpecialityActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddSpeciality: false,  
      error: null,  
      response: {},  
      specialityData: {},  
      isEditSpeciality: false,
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  }  
  
  onCreate() {  
    this.setState({ isAddSpeciality: true });  
  }  
  onDetails() {  
    this.setState({ isAddSpeciality: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddSpeciality: true });   
    if (this.state.isEditSpeciality) {  
     axios.put(apiUrl + '/update',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddSpeciality: false,  
          isEditSpeciality: false  
        })  
      });  
    } else {  
     
     axios.post(apiUrl + '/create',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddSpeciality: false,  
          isEditSpeciality: false  
        })  
      });  
    }  
    
  }  
  
  editSpeciality = _id => {  
   axios.get(apiUrl + "/id", _id).then(result => {  
  
        this.setState({  
          isEditSpeciality: true,  
          isAddSpeciality: true,  
          specialityData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let specialityForm;  
    if (this.state.isAddSpeciality || this.state.isEditSpeciality) {  
  
        specialityForm = <AddSpeciality onFormSubmit={this.onFormSubmit} speciality={this.state.specialityData} />  
       
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>CURD operation in React</h1>  
        <hr></hr>   
        {!this.state.isAddSpeciality && <Button variant="primary" onClick={() => this.onCreate()}>Add Speciality</Button>}  
        <br></br>  
        {!this.state.isAddSpeciality && <SpecialityList editSpeciality={this.editSpeciality} />}  
        {specialityForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default SpecialityActionApp;  