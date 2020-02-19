import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getPersonById } from '../../functions/personHandler';

class EditProfile extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.state = {
            Firstname: '',
            Lastname: '',
            Username: '',
            Email: '',
            // userId: localStorage.getItem('userId'),
        }
    }

    // Haetaan muokattavan henkilön tiedot valmiiksi lomakkeelle tietokannasta userId:n perusteella
    componentDidMount() {
        const userId = localStorage.getItem('userId')
        getPersonById(userId).then((response) => {
            console.log(response)
            this.setState({
                Firstname: response.data[0].firstname,
                Lastname: response.data[0].lastname,
                Username: response.data[0].username,
                Email: response.data[0].email,
            });
        })
    }

    onChangeFirstname(e) {
        this.setState({
            Firstname: e.target.value
        });
    }
    onChangeLastname(e) {
        this.setState({
            Lastname: e.target.value
        });
    }
    onChangeUsername(e) {
        this.setState({
            Username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    //Tässä henkilön poisto tokenin mukaan
    // deleteProfile = () => {
    //     console.log("koitetaan poistaa", userId)
    //     deletePerson(userId).then(() => {
    //         this.props.history.push("/Home")
    //     })
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     const obj = {
    //         Firstname: this.state.Firstname,
    //         Lastname: this.state.Lastname,
    //         Username: this.state.Username,
    //         Email: this.state.Email
    //     };

    //     // Kutsutaan muokkaa funktiota personhandlerista
    //     modifyPerson(obj, this.props.match.params.token);
    // }

    // localStorage.getItem('userId')

    render() {

        return (
            //  <h1>Tähän tulee käyttäjän profiili ja tiedot.</h1>
            <div className="content">
                <Container className="App">
                    <Form className="form" onSubmit={this.onSubmit}>
                        <Col>
                            <FormGroup row>
                                <Label for="firstname" sm={2}>Etunimi</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Firstname" value={this.state.Firstname} onChange={this.onChangeFirstname} placeholder="Etunimi" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" sm={2}>Sukunimi</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Lastname" value={this.state.Lastname} onChange={this.onChangeLastname} placeholder="Sukunimi" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="username" sm={2}>Käyttäjätunnus</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Username" value={this.state.Username} onChange={this.onChangeUsername} placeholder="Käyttäjätunnus" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Sähköposti</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Email" value={this.state.Email} onChange={this.onChangeEmail} placeholder="Sähköposti" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Col sm={5}>
                                </Col>
                                <Col sm={1}>
                                    <Button type="submit" color="success">Tallenna</Button>
                                    {/* <Button type="button" onClick={this.deleteItem} className="waves-effect waves-light btn pink remove">Poista</Button> */}
                                </Col>
                                <Col sm={2}>
                                    <button type="button" class="btn btn-dark">Poista tili</button>
                                </Col>
                                <Col sm={5}>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default EditProfile;