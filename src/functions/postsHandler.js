import axios from 'axios';

//Tässä GET pyyntö userid:n perusteella, haetaan kaikki käyttäjän tekemät ilmoitukset

// export function getPostsById(userId) {
//     axios.get('https://localhost:44389/api/person/'+userId)
//     .then(response => {
//       console.log(response)
//       this.setState({ posts: response.data })
//     })
//     .catch(error => {
//       console.log(error)
//       this.setState({ errorMsg: 'Tietoja ei löytynyt' })
//     })
// }

// Kutsutaan axios täältä, jos on aikaa

export function getPostsById(userId) {
    axios.get('https://localhost:44389/api/person/' + userId)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}