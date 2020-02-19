import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { postItem } from '../functions/itemHandler';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// Alustetaan parametrit
class CreateItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UserId: localStorage.getItem('userId'),
      Title: '',
      Info: '',
      Quantity: 1,
      ItemLocation: '',
      Itempicture:'https://kumostorageaccount.blob.core.windows.net/kumoimages/cd-pile.jpg',
    }
  }

  // Kutsutaan itemHandlerista POST funktiota
  createItem = () => {
    postItem(this.state);
    this.props.history.push('/Posts');
    window.location.reload();
  }

  // Lomakkeelle syötetyt tiedot asetetaan setStatella, kun event e tapahtuu (kommenteissa olevat ehkä tarvittavia)
  handleChange = (e) => {
    // this.setState({[e.target.name]:e.target.value});  
    this.setState({ [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value });
    // }  
    // {
    // if(e.target.type === 'number'){
    //   this.setState({[e.target.name]: parseInt(e.target.value)});
    // }
    // if(e.target.type === isNaN){
    //   this.setState({[e.target.name]: null})
    // }
    // else{
    //   this.setState({[e.target.name]:e.target.value});
    // }
  }


  // Renderöidään lomake
  render() {
    return (
      <Container className="App">
        <br></br>
        {/* <h4 className="PageHeading" align="left">Tuotetiedot</h4>   */}
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="title" sm={2}>Otsikko</Label>
              <Col sm={10}>
                <Input type="text" name="Title" onChange={this.handleChange} value={this.state.Title} placeholder="Tuotteen nimi" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="info" sm={2}>Kuvaus</Label>
              <Col sm={10}>
                <Input type="text" name="Info" onChange={this.handleChange} value={this.state.Info} placeholder="Esim. laatu, parasta ennen -päivämäärä, valmistaja" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="quantity" sm={2}>Lkm</Label>
              <Col sm={10}>
                <Input type="number" name="Quantity" onChange={this.handleChange} value={this.state.Quantity} placeholder="Lukumäärä" required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="itemlocation" sm={2}>Sijainti</Label>
              <Col sm={10}>
                <Input type="text" name="ItemLocation" onChange={this.handleChange} value={this.state.ItemLocation} placeholder="Mistä tuotteen voi hakea, esim. Keilaniemi, Espoo" />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}>
              </Col>
              <Col sm={1}>
                <button type="button" onClick={this.createItem} className="btn btn-success">Lisää</button>{' '}
              </Col>
              <Col sm={1}>
                <Link to="/"><button type="button" className="btn btn-dark">Peruuta</button></Link>
              </Col>
              <Col sm={5}>
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default withRouter(CreateItem);  