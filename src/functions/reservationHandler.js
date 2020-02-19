import axios from 'axios';

//Tässä POST pyyntö, jolla varaus tehdään
export function postReservation(reservationData) {
    console.log(reservationData)
    axios.post(`https://kumoapi.azurewebsites.net/api/reservation/`, reservationData)
        .then(json => {
            if (json.status === 200) {
                console.log(json.status);
                alert('Varattu onnistuneesti! Näet omat varaukset profiilisi alta.');
            }
            else {
                alert('Pahus, varaus ei onnistunut. Yritä uudelleen.');
            }
        })
}

//Tässä DELETE pyyntö, jolla varaus poistetaan
export function deleteReservation(itemId) {
    console.log(itemId);
    return axios.delete('https://kumoapi.azurewebsites.net/api/reservation/' + itemId)
        .then(json => {
            if (json.status === 200) {
                console.log(json.status);
                alert('Varaus poistettu onnistuneesti.');
            }
            else {
                alert('Hupsis, varauksen poisto ei onnistunut. Yritä uudelleen.')
            }
        })
}