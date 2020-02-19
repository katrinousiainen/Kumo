import React, { Component } from "react";
import GetAllItems from "../components/GetAllItems";
import axios from 'axios';

class Home extends Component {

  //   constructor(props) {
  //     super(props)

  //     this.state = {
  //         items: this.props.items,
  //         errorMsg: this.props.errorMsg
  //     }
  // }

  //   state = {items: []}
  //   componentDidMount() {
  //   this.setState({items: this.props.items, errorMsg: this.props.errorMsg})
  // }

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    axios.get(`https://kumoapi.azurewebsites.net/api/kumo`)
      .then(response => {
        console.log(response)
        this.setState({ items: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Error, data not retrieved' })
      })
    // this.props.onTryAutoSignup();
  }


  render() {
    return (
      <div className="container">
        <br></br>
        <GetAllItems items={this.state.items} errorMsg={this.state.errorMsg} />
      </div>
    )
  }

}

export default Home;


