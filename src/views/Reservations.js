import React, { Component } from "react";
import GetReservations from '../components/GetReservations'
// import orange from '../images/orange.jpg'
// import { Link } from 'react-router-dom';
// import {Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';


class Reservations extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     testlist: [
    //       { id: 1, name: 'Oma ilmoitukseni1', info: 'Tosi kiva tuote', location: 'Keilaniemi' },
    //       { id: 2, name: 'Oma ilmoitukseni2', info: 'vielä kivempi tuote', location: 'Helsinki' },
    //       { id: 3, name: 'Oma ilmoitukseni3', info: 'tarpeeton mutta mukava', location: 'Kallio' },
    //       { id: 4, name: 'Oma ilmoitukseni4', info: 'vanha mutta toimiva', location: 'Haaga' },
    //     ]
    // }
    // }

    render() {
        return (
            <div className="container">
                <GetReservations />
            </div>
        )
    }

    //     render() {
    //         const {testlist} = this.state
    //         return (
    //             <div><h1>Omat ilmoituksesi:</h1>
    //             <div className="card-deck">
    //                 {
    //                      testlist.length ?
    //                      testlist.map(item => 
    //                 <div className="col-sm-4">
    //                         <div key={item.id} className="card">
    //                         <img className="card-img-top" src={orange} alt="Card image cap"/>
    //                         <div className="card-body">
    //                      <h5 class="card-title">{item.name}</h5>
    //                     <p className="card-text">
    //                         kuvaus: {item.info}<br/>
    //                         sijainti: {item.location}</p>
    //                     <button type="button" className="btn btn-light"><Link>Muokkaa</Link></button>{' '} 
    //                     <button type="button" className="btn btn-light">Poista</button></div></div></div>):
    //                     null
    //                 }
    //     </div>
    //     </div>
    //     )      
    // }
}

export default Reservations;


