import React from 'react';
import axios from 'axios';
import orange from '../images/orange.jpg'
// import { withRouter } from 'react-router-dom';
import { deleteReservation } from '../functions/reservationHandler';
import { withRouter } from 'react-router-dom';

class GetReservations extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reservations: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    axios.get(`https://kumoapi.azurewebsites.net/api/reservation/` + userId)
      .then(response => {
        console.log(response)
        this.setState({ reservations: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Sinulla ei ole varauksia' })
      })
  }

  removeReservation = (itemId) => {
    console.log("koitetaan poistaa", itemId)
    deleteReservation(itemId)
    this.props.history.push('/Reservations')
    window.location.reload()
  }

  render() {
    const { reservations } = this.state
    return (
      <div><h1>Omat varauksesi</h1><br />
        <p align="left">Varauksesi on voimassa 24 tuntia. Sen jälkeen tuote vapautuu muiden varattavaksi.</p>
        <div className="card-deck">
          {
            reservations.length ?
              reservations.map(reservation =>
                <div className="col-sm-4">
                  <div key={reservation.itemId} className="card">
                    <img className="card-img-top" src={reservation.itempicture} alt="kuva" />
                    <div className="card-body">
                      <h5 className="card-title">{reservation.title}</h5>
                      <p className="card-text">
                        {reservation.quantity}{' '}kpl<br />
                        {reservation.info}<br />
                        {reservation.itemlocation}</p>
                      <button type="button" id="button" className="btn btn-dark" onClick={() => this.removeReservation(reservation.itemId)}>Poista varaus</button>{' '}
                      <button type="button" id="button" className="btn btn-info">Lähetä viesti ilmoittajalle<icon className="Send" /></button>{' '}
                    </div></div></div>) :
              null
          }
        </div>
      </div>
    )
  }
}

export default withRouter(GetReservations);
