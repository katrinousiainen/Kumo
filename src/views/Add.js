import React, { Component } from "react";
import Picture from "../Picture";
import CreateItem from '../components/CreateItem';
import ImageAdd from '../components/ImageAdd';

class Add extends Component {
  render() {
    return (


      <div className="container">
        <h1 className="PageHeading">Lisää ilmoitus</h1><br />

        <div className="box"></div>
        <div><ImageAdd /></div>
        <div><CreateItem /></div>
        {/* <div><Picture /></div> */}

      </div>


    )
  }
}

export default Add;