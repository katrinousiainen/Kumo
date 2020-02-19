import React, { Component } from "react";
import UpdateItem from "../components/UpdateItem";

class Update extends Component {
  render() {
    return (
      <div className="container">
        <UpdateItem  {...this.props} />
      </div>
    )
  }

}

export default Update;