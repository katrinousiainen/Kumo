import axios from 'axios';

//Tässä GET pyyntö userid:n perusteella
export function getPersonById(userId) {
    // return axios.get('https://kumoapi.azurewebsites.net/api/person'+userId)  
    return axios.get('https://localhost:44389/api/person/' + userId)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


//Tässä POST pyyntö 
// export function postPerson(myJSON){
//     console.log(myJSON)

//   axios.post('https://localhost:44389/api/person/', myJSON) 
//   .then(json => {  
//   if(json.status===200){  
//     console.log(json.status);  
//     alert("Lähetetty onnistuneesti");  
//   }  
//   else{  
//   alert('Lähetys ei onnistunut');  
//   }  
//   })  
//   }