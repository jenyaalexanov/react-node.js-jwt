import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
  
const apiUrl = process.env.REACT_APP_API_ENDPOINT + 'specialities';
  
class SpecialityList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           specialities:[],  
           response: {}  
              
        }; 
    }  
  
    componentDidMount(){
       
        
       axios.get(apiUrl + '/all').then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    specialities:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    delete(id) {  
      const { specialities } = this.state;     
     axios.delete(apiUrl + '/delete/' + id).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          specialities:specialities.filter(speciality=>speciality._id !== id)  
        });  
      });  
    }  
  
    render(){         
        const{error,specialities}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Id</th>  
                        <th>Name</th>
                        <th>Action</th>  
                      </tr>  
                    </thead>  
                    <tbody>  
                      {specialities.map(speciality => (  
                        <tr key={speciality._id}>  
                          <td>{speciality._id}</td>
                          <td>{speciality.Name}</td>
                          <td><Button variant="info" onClick={() => this.props.editSpeciality(speciality._id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.delete(speciality._id)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default SpecialityList; 