import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { putModify, deleteItem, getById } from '../functions/itemHandler';
import { withRouter } from 'react-router-dom';


class UpdateItem extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeItemLocation = this.onChangeItemLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: '',
            Info: '',
            Quantity: 1,
            ItemLocation: '',
        }
    }

    componentDidMount() {
        getById(this.props.match.params.id).then((response) => {
            this.setState({
                ItemID: response.data.itemID,
                Title: response.data.title,
                Info: response.data.info,
                ItemLocation: response.data.itemlocation,
                Quantity: response.data.quantity
            });
        })
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeInfo(e) {
        this.setState({
            Info: e.target.value
        });
    }
    onChangeQuantity(e) {
        this.setState({
            Quantity: parseInt(e.target.value)
        });
    }
    onChangeItemLocation(e) {
        this.setState({
            ItemLocation: e.target.value
        });
    }

    deleteItem = () => {
        console.log("koitetaan poistaa", this.props.match.params.id)
        deleteItem(this.props.match.params.id).then(() => {
            this.props.history.push('/Posts')

        })
    }

    onSubmit(e) {

        e.preventDefault();
        const obj = {
            Title: this.state.Title,
            Info: this.state.Info,
            Quantity: this.state.Quantity,
            ItemLocation: this.state.ItemLocation
        };

        putModify(obj, this.props.match.params.id);
        let path = '/Posts';
        this.props.history.push(path);
    }

    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Muokkaa ilmoituksen tietoja</h4>
                <Form className="submitForm" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="title" sm={2}>Nimi</Label>
                            <Col sm={10}>
                                <Input type="text" name="Title" onChange={this.onChangeTitle} value={this.state.Title} placeholder="Tuotteen nimi" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="info" sm={2}>Kuvaus</Label>
                            <Col sm={10}>
                                <Input type="text" name="Info" value={this.state.Info} onChange={this.onChangeInfo} placeholder="Esim. laatu, parasta ennen -päivämäärä, valmistaja" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="quantity" sm={2}>Lkm</Label>
                            <Col sm={10}>
                                <Input type="number" name="Quantity" value={this.state.Quantity} onChange={this.onChangeQuantity} placeholder="Lkm" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="itemlocation" sm={2}>Sijainti</Label>
                            <Col sm={10}>
                                <Input type="text" name="ItemLocation" value={this.state.ItemLocation} onChange={this.onChangeItemLocation} placeholder="Mistä tuotteen voi hakea esim. Keilaniemi" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" className="btn btn-success">Tallenna</Button>
                            </Col>
                            <Col sm={1}>
                                <Button onClick={this.deleteItem} className="btn btn-dark">Poista</Button>
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

export default withRouter(UpdateItem);