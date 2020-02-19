import axios from 'axios';


// MITEN TÄMÄ TOIMIMAAN TÄÄLLÄ? NYT TOIMII GETALLITEMS-LUOKASSA :::
// componentDidMount = lifecycle method
// this method will be excecuted when the component mounts for the first time
// ant it is only excecutes ones during a component's lifetime
// a perfect place for out GET-request!

// export default function getAll(callback){
//   axios.get('https://kumoapi.azurewebsites.net/api/kumo')
//       .then(response => {
//           console.log(response)
//           this.setState({items: response.data})
//       })
//       .catch(error => {
//           console.log(error)
//           this.setState({errorMsg: 'Error, data not retrieved'})
//       })
//     }

// MITEN TOIMIMAAN TÄÄLLÄ ^^



//Tässä GET pyyntö Id:n perusteella
export function getById(id) {
  // return axios.get('https://kumoapi.azurewebsites.net/api/kumo'+id)  
  return axios.get('https://kumoapi.azurewebsites.net/api/kumo/' + id)

    .then(response => {
      return response;

    })
    .catch(function (error) {
      console.log(error);
    })
}

//Tässä POST pyyntö
export function postItem(myJSON) {
  console.log(myJSON)

  axios.post('https://kumoapi.azurewebsites.net/api/kumo/', myJSON)
    .then(json => {
      if (json.status === 200) {
        console.log(json.status);
        alert("Lähetetty onnistuneesti");

      }
      else {
        alert('Lähetys ei onnistunut');
        // debugger;
        // this.props.history.push('/')  
      }
    })
}

//Tässä PUT pyyntö: 
//Sitten lähetetään muokatut tiedot PUT pyynnöllä:
// export function putModify(obj, id)
// {
//   //axios.put(`https://cors-anywhere.herokuapp.com/https://localhost:44389/api/kumo/`)
//   //axios.put('https://kumoapi.azurewebsites.net/api/kumo/'+id, obj) 
//   axios.put('/api/kumo/'+id, obj) 
//           .then(res => console.log(res.data));  
//           // debugger;  
//           // this.props.history.push('/HaeTuote')  

// }

export function putModify(obj, id) {
  axios.put('https://kumoapi.azurewebsites.net/api/kumo/' + id, obj)
    .then(res => {
      if (res.status === 200);
      console.log(res.data);
      window.location.reload();
      alert("Muokattu onnistuneesti!")
      //this.props.history.push("/")
    }
    )
}



//Tässä DELETE pyyntö:
export function deleteItem(id) {
  return axios.delete('https://kumoapi.azurewebsites.net/api/kumo/' + id)
    .then(json => {
      if (json.data.Status === 'Delete') {
        alert('Ilmoitus poistettu onnistuneesti!!');
        // this.props.history.push('/') 
      }
    })
}
