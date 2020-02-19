import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { logout } from '../views/actions/auth';
import logo from './logo.png';

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => { this.showDropdown(e) }}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light" id="navbar">
        <a className="navbar-brand" id="logospot" href="/"><img src={logo} id="logo"></img></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="navlist">
            <NavItem path="/" name="Hae ilmoituksia" />
            {this.props.isAuthenticated
              ? <NavItem path="/Add" name="Lisää ilmoitus" />
              : null}
            {this.props.isAuthenticated
              ? <NavDropdown name="Profiili">
                <a className="dropdown-item" href="/Reservations">Omat varaukset</a>
                <a className="dropdown-item" href="/Posts">Omat ilmoitukset</a>
                <a className="dropdown-item" href="/Profile">Omat tiedot</a>
                <a className="dropdown-item">Omat viestit</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/" onClick={logout}>Kirjaudu ulos</a>
              </NavDropdown>
              : <NavItem path="/auth" name="Luo tili/Kirjaudu" />}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Navigation);
