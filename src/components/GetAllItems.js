import React from 'react';
// import {Link} from 'react-router-dom';
// import button from 'react-bootstrap/Button';
// import { runInThisContext } from 'vm';
// import {Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import cookies from '../images/cookies.jpg'
// import orange from '../images/orange.jpg'
import { connect } from 'react-redux';
import { postReservation } from '../functions/reservationHandler';
import { BackgroundImageContainer } from './images.styles';
// import {getPersonById} from '../functions/personHandler';

class GetAllItems extends React.Component {

  state = {
    filter: "",
    firstname: "",
  }

  //   sayHello=()=> {
  //     const userId = localStorage.getItem('userId')
  //     getPersonById(userId).then((response) => {
  //         console.log("moi")
  //         this.setState({
  //             firstname: response.data[0].firstname
  //         });
  //     })
  // }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  //   Tuotteen varaus kutsumalla POST reservationHandlerista
  reserveItem = (itemId) => {
    const reservationData = {
      itemId: itemId,
      userId: localStorage.getItem('userId')
    }
    console.log(reservationData);
    postReservation(reservationData);
  }

  render() {
    const lowercasedFilter = this.state.filter.toLowerCase();
    const filteredData = this.props.items.filter(item => {
      return Object.keys(item).some(key =>
        item.title.toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        {!this.props.isAuthenticated
          ? <p id="welcometext" align="left"><strong>Tervetuloa Kumoon! </strong>
            <br /> Kirjaudu sisään ja laita hyvä kiertämään.</p>
          : <p id="welcometext" align="left"><strong></strong></p>}
        <input className="form-control form-control-lg" value={this.state.filter} onChange={this.handleChange} placeholder="Hae ilmoituksia nimellä" id="find" />
        <div className="card-deck">
          {filteredData.map(item => (
            <div key={item.itemId} className="col-sm-4">
              <div className="card">
              
              <BackgroundImageContainer>
                <img className="card-img-top" src={item.itempicture} alt="Card cap" />
                </BackgroundImageContainer>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.info}<br />{item.quantity}{' '}kpl<br />{item.itemlocation}</p>
                  {this.props.isAuthenticated
                    ? <button type="button" id="button" className="btn btn-dark" onClick={() => this.reserveItem(item.itemId)}>Varaa</button>
                    : null}
                  <div>
                  </div>
                </div>
                {this.props.errorMsg ? <div>{this.props.errorMsg}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(GetAllItems);




  // SIIRRETTY APP:JS:    
      // a state property, which will store a list of items
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //         items: [], //creating the list of items to a state property called items
  //         errorMsg: ''
  //     }
  // }

  // TÄMÄ JÄI KESKEN
  // addToCart = () => {
  //     let cart = localStorage.getItem('cart')
  // }

  // componentDidMount = lifecycle method
  // this method will be excecuted when the component mounts for the first time
  // ant it is only excecutes ones during a component's lifetime
  // a perfect place for out GET-request!

  // SIIRRETTY APP:JS:
  // componentDidMount() {
  //     //axios.get('https://kumoapi.azurewebsites.net/api/kumo')
  // axios.get(`/api/kumo`)
  //     .then(response => {
  //         console.log(response)
  //         this.setState({items: response.data})
  //     })
  //     .catch(error => {
  //         console.log(error)
  //         this.setState({errorMsg: 'Error, data not retrieved'})
  //     })
  // }