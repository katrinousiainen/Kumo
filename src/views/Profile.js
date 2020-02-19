import React from 'react';
// import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { getPersonById } from '../functions/personHandler';
import EditProfile from '../components/profile/EditProfile';
// import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import {Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';



class Profile extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className="PageHeading">Omat tietosi</h1><br />
        <div className="box"></div>
        <div><EditProfile /></div>
      </div>
    )
  }

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //     firstname: '',
  //     lastname: '', 
  //     email: '', 
  //     username: '',
  //     }
  // }

  //   componentDidMount() {
  //       const userId = localStorage.getItem('userId')
  //       console.log(userId);
  //     getPersonById(userId).then((response) => {
  //         console.log(response);
  //         this.setState({
  //             firstname: response.data[0].firstname,
  //             lastname: response.data[0].lastname,
  //             email: response.data[0].email,
  //             username: response.data[0].username,
  //         });
  //     })
  // }

  //     render() {
  //     return (
  //         <div><h1>Omat tiedot</h1>
  //         <div className="col-sm-4">
  //             <h4>Käyttäjätunnus: </h4>{this.state.username}
  //             <h4>Etunimi:</h4>{this.state.firstname}
  //             <h4>Sukunimi: </h4>{this.state.lastname}
  //             <h4>Sähköposti: </h4>{this.state.email}
  //         <div/>
  //         <div>
  //         <br/>
  //         <br/>
  //         {/* <Button type="button" className="btn btn-light">Muokkaa</Button>{' '} */}
  //         <button type="button" id="button" className="btn btn-light"><Link to={{pathname:`/profile/EditProfile/`}}>Muokkaa</Link></button>{' '}
  //         <button type="button" className="btn btn-light">Poista</button></div>
  //         </div>
  //         <EditProfile/>
  //         </div>
  //     )      
  // }
}

export default Profile;